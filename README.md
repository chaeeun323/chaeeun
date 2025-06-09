# Kakao-style Interactive Dialogue System

This project is a browser-based dialogue engine that displays conversations in a KakaoTalk style interface. Dialogues can branch based on user choices, include hints and answer input, and support saving/loading game progress.

## Launching

Because the JavaScript modules are loaded via ES module imports, the project should be served through a local web server. A quick way is to run:

```bash
python3 -m http.server
```

Then open `http://localhost:8000/index.html` in your browser. The main menu will appear with an intro video and buttons to start a new game or load a save file.

## Module Structure

```
modules/
├─ core/           # Global context and skip management
├─ dialogue/       # Dialogue rendering, branching and answers
├─ input/          # Input listeners and click handling
├─ kakao/          # Functions to render Kakao-style chat messages
├─ save/           # Save file creation and download utilities
└─ ui/             # UI components (backgrounds, intro screen, popups, etc.)
```

Dialogue scripts live under `data/dialogues/` and are combined by `modules/dialogue/dialogueManager.js`. The entry point `script.js` wires the modules together and is loaded from `index.html`.
