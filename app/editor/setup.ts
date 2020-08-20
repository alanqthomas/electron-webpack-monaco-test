/* eslint-disable */
import path from 'path'
import * as monaco from "monaco-editor";
import { languageExtensionPoint, languageID } from "./config";
import { richLanguageConfiguration, monarchLanguage } from "./TodoLang";
import { TodoLangWorker } from "./todoLangWorker";
import { WorkerManager } from "./WorkerManager";
import DiagnosticsAdapter from "./DiagnosticsAdapter";
import TodoLangFormattingProvider from "./TodoLangFormattingProvider";

export function setupLanguage() {
    (window as any).MonacoEnvironment = {
        getWorkerUrl: function(_moduleId: string, label: string) {
            if (label === languageID) {
                return 'http://localhost:1212/dist/todoLangWorker.js'
            } else {
                return 'http://localhost:1212/dist/editor.worker.js'
            }
        }
    }
    monaco.languages.register(languageExtensionPoint);
    monaco.languages.onLanguage(languageID, () => {
        monaco.languages.setMonarchTokensProvider(languageID, monarchLanguage);
        monaco.languages.setLanguageConfiguration(languageID, richLanguageConfiguration);
        const client = new WorkerManager();

        const worker: WorkerAccessor = (...uris: monaco.Uri[]): Promise<TodoLangWorker> => {
            return client.getLanguageServiceWorker(...uris);
        };
        //Call the errors provider
        new DiagnosticsAdapter(worker);
        monaco.languages.registerDocumentFormattingEditProvider(languageID, new TodoLangFormattingProvider(worker));
    });

}

export type WorkerAccessor = (...uris: monaco.Uri[]) => Promise<TodoLangWorker>;