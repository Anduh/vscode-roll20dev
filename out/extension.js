"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const provider1 = vscode.languages.registerCompletionItemProvider('jade', {
        provideCompletionItems(document, position, token, context) {
            // a simple completion item
            const sheetworker = new vscode.CompletionItem('script(type="text/worker")');
            sheetworker.documentation = new vscode.MarkdownString('Sheetworker block [Roll20 Wiki](https://wiki.roll20.net/sheetworker) ');
            const button = new vscode.CompletionItem('button(type="roll")');
            button.insertText = new vscode.SnippetString('button(type="roll" name="roll_$1" title="%{$1}" value="2")$0');
            button.documentation = new vscode.MarkdownString('Roll button [Roll20 Wiki](https://wiki.roll20.net/Button#Roll_Button) ');
            const buttonAct = new vscode.CompletionItem('button(type="action")');
            buttonAct.insertText = new vscode.SnippetString('button(type="action" name="act_$1" title="%{$1}" value="2")$0');
            buttonAct.documentation = new vscode.MarkdownString('Action button [Roll20 Wiki](https://wiki.roll20.net/Button##Action_Button) ');
            const i18n = new vscode.CompletionItem('data-i18n');
            i18n.insertText = new vscode.SnippetString('data-i18n="$1"$0');
            i18n.documentation = new vscode.MarkdownString('Translation [Roll20 Wiki](https://wiki.roll20.net/i18n) ');
            const i18nTitle = new vscode.CompletionItem('data-i18n-title');
            i18nTitle.insertText = new vscode.SnippetString('data-i18n-title="$1"$0');
            i18nTitle.documentation = new vscode.MarkdownString('Translation [Roll20 Wiki](https://wiki.roll20.net/i18n) ');
            // a completion item that inserts its text as snippet,
            // the `insertText`-property is a `SnippetString` which will be
            // honored by the editor.
            const snippetCompletion = new vscode.CompletionItem('Good part of the day');
            snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
            snippetCompletion.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");
            // a completion item that can be accepted by a commit character,
            // the `commitCharacters`-property is set which means that the completion will
            // be inserted and then the character will be typed.
            const commitCharacterCompletion = new vscode.CompletionItem('console');
            commitCharacterCompletion.commitCharacters = ['.'];
            commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');
            // a completion item that retriggers IntelliSense when being accepted,
            // the `command`-property is set which the editor will execute after 
            // completion has been inserted. Also, the `insertText` is set so that 
            // a space is inserted after `new`
            const commandCompletion = new vscode.CompletionItem('new');
            commandCompletion.kind = vscode.CompletionItemKind.Keyword;
            commandCompletion.insertText = 'new ';
            commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            // return all completion items as array
            return [
                sheetworker,
                button,
                buttonAct,
                i18n,
                i18nTitle,
                snippetCompletion,
                commitCharacterCompletion,
                commandCompletion
            ];
        }
    });
    const provider2 = vscode.languages.registerCompletionItemProvider('plaintext', {
        provideCompletionItems(document, position) {
            // get all text until the `position` and check if it reads `console.`
            // and if so then complete if `log`, `warn`, and `error`
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('console.')) {
                return undefined;
            }
            return [
                new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
            ];
        }
    }, '.' // triggered whenever a '.' is being typed
    );
    context.subscriptions.push(provider1, provider2);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map