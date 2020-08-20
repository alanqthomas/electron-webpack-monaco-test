/* eslint-disable */
import * as monaco from 'monaco-editor'

import { ITodoLangError } from './TodoLangErrorListener'
import { languageID } from './config'
import { WorkerAccessor } from './setup'

export default class DiagnosticsAdapter {
	private readonly worker: WorkerAccessor

	constructor(worker: WorkerAccessor) {
		this.worker = worker

		const onModelAdd = (model: monaco.editor.IModel): void => {
			let handle: NodeJS.Timeout
			model.onDidChangeContent(() => {
				// here we are Debouncing the user changes, so everytime a new change is done, we wait 500ms before validating
				// otherwise if the user is still typing, we cancel the
				clearTimeout(handle)
				handle = setTimeout(
					(): void => void this.validate(model.uri),
					500
				)
			})

			void this.validate(model.uri)
		}
		monaco.editor.onDidCreateModel(onModelAdd)
		monaco.editor.getModels().forEach(onModelAdd)
	}
	private async validate(resource: monaco.Uri): Promise<void> {
		// get the worker proxy
		const worker = await this.worker(resource)
		// call the validate methode proxy from the langaueg service and get errors
		const errorMarkers = await worker.doValidation()
		// get the current model(editor or file) which is only one
		const model = monaco.editor.getModel(resource)
		// add the error markers and underline them with severity of Error
		if (model !== null) {
			monaco.editor.setModelMarkers(model, languageID, errorMarkers.map(toDiagnostics))
		} else {
			console.error('Could not set model markers because model is NULL')
		}

	}
}
function toDiagnostics(error: ITodoLangError): monaco.editor.IMarkerData {
	return {
		...error,
		severity: monaco.MarkerSeverity.Error,
	}
}
