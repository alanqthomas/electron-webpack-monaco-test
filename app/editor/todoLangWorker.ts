/* eslint-disable */
import * as monaco from 'monaco-editor'

import TodoLangLanguageService from './LanguageService'
import { ITodoLangError } from './TodoLangErrorListener'

type IWorkerContext<H = undefined> = monaco.worker.IWorkerContext<H>

export class TodoLangWorker {

	private readonly ctx: IWorkerContext
	private readonly languageService: TodoLangLanguageService
	constructor(ctx: IWorkerContext) {
		this.ctx = ctx
		this.languageService = new TodoLangLanguageService()
	}

	private getTextDocument(): string {
		const model = this.ctx.getMirrorModels()[0]// When there are multiple files open, this will be an array
		return model.getValue()
	}

	doValidation(): Promise<Array<ITodoLangError>> {
		const code = this.getTextDocument()
		return Promise.resolve(this.languageService.validate(code))
	}
	format(code: string): Promise<string>{
		return Promise.resolve(this.languageService.format(code))
	}
}
