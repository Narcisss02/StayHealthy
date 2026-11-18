# Stage 7: AI log

## Tools
- Gemini

## Conversations
- https://share.gemini.google/uZe7SmDBByc2

## Key requests

### 1. Stage 7 setup and CRUD implementation
- Asked: Analyze the Stage 7 guide and explain everything I need to do, including the code for StayHealthy.
- Got: Gemini provided the extended `api.js` with a shared `request()` helper and CRUD functions (`GET`, `POST`, `PATCH`, `DELETE`), the controlled `AntrenamentForm.jsx` component with validation, updated `App.jsx` handlers (`handleAdd`, `handleToggle`, `handleDelete`), `data-testid` attributes, and the `tw.json` file.
- Changed or rejected: Kept as suggested, adapting all fields (`antrenamente`, `titlu`, `finalizat`, `dificultate`) to match `db.json`.

### 2. Understanding the core concepts of the stage
- Asked: What is the truly new concept in this lab besides connecting the app to an API?
- Got: Gemini explained the server-first synchronization pattern (updating React state only after the server confirms the save), how controlled forms prevent page reloads with `e.preventDefault()`, and how `data-testid` and `tw.json` enable automated verification.
- Changed or rejected: Read and used these concepts to verify my form and API logic.

## What I learned / what did not work
I learned how to build a controlled form in React using `value` and `onChange`, validate input without native browser alerts, and disable the submit button while a request is in progress. I also learned how to centralize all HTTP CRUD requests in `api.js`, handle `204 No Content` responses, and configure `tw.json` and `data-testid` attributes for automated testing.