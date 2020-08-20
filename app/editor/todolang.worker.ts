/* eslint-disable */
// @ts-ignore
import * as worker from 'monaco-editor/esm/vs/editor/editor.worker.js'

import { TodoLangWorker } from './todoLangWorker'

self.onmessage = (): void => {
	worker.initialize((ctx: any) => {
		return new TodoLangWorker(ctx)
	})
}
