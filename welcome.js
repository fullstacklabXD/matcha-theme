const vscode = require('vscode');

function activate(context) {
    const disposable = vscode.commands.registerCommand('matchaCeremony.showWelcome', () => {
        const panel = vscode.window.createWebviewPanel(
            'matchaCeremonyWelcome',
            '🍵 Matcha Ceremony',
            vscode.ViewColumn.One,
            {}
        );
        panel.webview.html = getWelcomeHtml();
    });
    context.subscriptions.push(disposable);
}

function getWelcomeHtml() {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: var(--vscode-font-family);
            background: #1D1F1B;
            color: #C5D0C0;
            padding: 2rem;
            line-height: 1.6;
        }
        h1 { color: #8FA87A; font-size: 1.8rem; margin-bottom: 1rem; }
        p { margin-bottom: 1rem; }
        .variants { margin-top: 1.5rem; color: #A8B89A; font-size: 0.9rem; }
    </style>
</head>
<body>
    <h1>🍵 Matcha Ceremony</h1>
    <p>Welcome to the zen-inspired theme.</p>
    <p>Muted matcha greens and warm rice paper tones create an atmosphere for focused work.</p>
    <p class="variants">Variants: Matcha Ceremony, Dawn, Dusk, Midnight, Zen, Sakura — choose in color theme settings.</p>
</body>
</html>`;
}

function deactivate() {}

module.exports = { activate, deactivate };
