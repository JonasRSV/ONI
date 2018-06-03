const activate = oni => {
  // access the Oni plugin API here
  oni.input.bind("<f8>", "markdown.togglePreview")
}

module.exports = {
  activate,
  // change configuration values here:
  "oni.useDefaultConfig": true,
  "oni.loadInitVim": true,
  "editor.fontSize": "14px",
  "editor.fontFamily": "Monaco",
  "editor.completions.mode": "oni",
  "browser.defaultUrl": "https://www.google.com",
  "tabs.mode": "hidden",
  "editor.fullScreenOnStart": true,
  "workspace.autoDetectWorkspace": "never",
  "language.haskell.languageServer.command": "hie",
  "language.haskell.languageServer.arguments": ["--lsp"],
  "language.haskell.languageServer.rootFiles": [".git"],
  "language.vue.languageServer.command": "vls"
}
