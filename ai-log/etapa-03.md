# Stage 3: AI log

## Tools
- Gemini

## Conversations
Link: (https://share.gemini.google/UiMtQkpfvvFU)

## Key requests

### 1. Initializing the Vite project
- Asked: "I need to start a React project using Vite in a folder called `frontend`. What is the exact command and what options should I choose when prompted?"
- Got: Gemini provided the command `npm create vite@latest frontend -- --template react`. It also guided me to select ESLint when asked for a linter, and to choose "No" when asked to install dependencies and start immediately, so I could do it step-by-step.
- Changed or rejected: I followed the steps exactly as explained in the terminal to set up the project structure correctly.

### 2. Cleaning up the Vite boilerplate
- Asked: "Vite generated a lot of files like `assets`, `App.css` content, and `index.css`. The assignment says to delete the demo files. Which ones are safe to delete without breaking the React app completely?"
- Got: The AI provided a safe list of files to remove: the `assets` folder, `vite.svg` from public, and `index.css`. It also advised me to clear the content of `App.css` and `App.jsx`, but keep the files themselves, and warned me that I would get a 404 error until I fixed the imports in `main.jsx`.
- Changed or rejected: I manually deleted the files in VS Code and updated the CSS imports myself instead of asking for the final code.

### 3. Understanding JSX syntax
- Asked: "How do I convert my HTML mockup into JSX? What are the main differences I should watch out for to avoid syntax errors?"
- Got: The AI explained the key differences. For example, it told me that `class` becomes `className`, that all empty tags must be self-closed (like `<input />`), and how to evaluate JavaScript expressions using curly braces `{}`.
- Changed or rejected: I used this theoretical knowledge to manually adapt my HTML header and grid layout from Stage 1 into the `App.jsx` component.

### 4. Node Modules and Git
- Asked: "Why does the guide say I shouldn't push the `node_modules` folder to GitHub, and how do I prevent it from being committed?"
- Got: It explained that `node_modules` is huge and can be recreated anytime using `npm install` based on the `package.json` file. It clarified that Vite automatically generates a `.gitignore` file that handles this exclusion.
- Changed or rejected: I verified the `.gitignore` file manually before committing to ensure the folder was actually ignored by Git.

## What I learned / what did not work
I learned how to initialize a modern React project using Vite, how the local development server works (`npm run dev`), the role of `package.json`, and how to embed variables directly into the UI using JSX syntax.