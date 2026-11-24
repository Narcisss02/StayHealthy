# Stage 9: AI log

## Tools

* Gemini

## Conversations

* https://share.gemini.google/sVUxlNDcq7LF

## Key requests

### 1. Building the Express backend for StayHealthy

* Asked: Analyze the Stage 9 guide and provide the Express backend setup adapted to the StayHealthy project.

* Got: Gemini provided the `backend/` setup (`package.json` with `"type": "module"`, `.env.example`, `.gitignore`, `src/server.js`, `src/app.js`, `src/validation.js`, and `src/routes/antrenamente.js`) with all five REST routes, CORS configuration, centralized error handling, and server-side validation.

* Changed or rejected: Included validation for the optional `progres` field alongside `titlu`, `dificultate`, and `finalizat` so the existing frontend progress slider continues to work.

### 2. Clarifying backend folder structure and removing `json-server`

* Asked: Provide a clear overview of the `backend/` folder structure and the steps to disconnect `json-server`.

* Got: Gemini outlined the directory tree, the role of each file, and the frontend cleanup steps (updating `api.js` to read `body.error`, deleting `db.json`, removing `json-server` from `frontend/package.json`, and running `npm install`).

* Changed or rejected: Kept as suggested.

### 3. Testing the API with `curl` in Git Bash

* Asked: How to open Git Bash to run the `curl` test commands without PowerShell quoting issues.

* Got: Gemini gave the steps to launch a Git Bash terminal directly inside VS Code and run the `GET`, `POST`, `DELETE`, and error-case `curl` checks against `http://localhost:3001/antrenamente`.

* Changed or rejected: Used Git Bash in VS Code as recommended and verified all expected HTTP status codes (`200`, `201`, `400`, `404`, `204`).

## What I learned / what did not work

I learned how to replace a mock API (`json-server`) with a custom Node.js and Express 5 backend while keeping the frontend almost untouched by centralizing requests in `api.js`. I also learned why middleware order matters (`cors`, `express.json()`, routes, 404 handler, centralized error handler), how CORS works between different ports (`5173` and `3001`), why server-side validation with a field whitelist is necessary, and how to test REST endpoints independently using `curl` in Git Bash.