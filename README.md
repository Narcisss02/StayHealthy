# StayHealthy
A web application to manage gym workouts, track progress, and organize fitness routines.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| **Title** | text | required, max 100 chars, workout name |
| **Completed** | boolean | toggled from the list, default false (Planned/Done) |
| **Difficulty** | fixed values | Easy, Medium, Intense |
| **Type** | relation | Strength, Cardio, Flexibility |
| **Member** | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Leg Day Workout, planned, Intense
2. Morning Run 5km, done, Medium
3. Yoga & Stretching, planned, Easy

## AI usage
| Tool | Used for |
| --- | --- |
| Gemini | Assisting with validating the code for the initial stage of project for HTML and CSS, and project structure based on the assignment PDF. |

Details per stage:
* **Stage 1:** Used Gemini to generate the grid/flexbox layout, CSS variables for dark mode, and adapt the gym theme for the static HTML/CSS mockup.
* **Stage 2:** Discussed converting HTML data into a JS array of objects and implementing immutable functions (`map`, `filter`, `reduce`) for the app logic.
* **Stage 3:** Asked for explanations on initializing the Vite project, cleaning up boilerplate files safely, and understanding JSX syntax differences.
* **Stage 4:** Used the AI to understand React component architecture, passing data via `props`, and rendering lists dynamically with `map()` and unique keys.
* **Stage 5:** Discussed managing local state with `useState`, passing callback functions as props for inverse data flow, and dynamically toggling the global theme.


## How to run
Open `index.html` in a browser. No build step, no server.
For Stage 2, press F12 to open the Developer Tools and view the logic tests in the Console.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API

## Stage 1 Checklist (To be filled after git push)
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | https://github.com/Narcisss02/StayHealthy/blob/c97e726ba6f963bfd833efe8704faef8e88d593e/README.md?plain=1#L1-L16 | read |
| S1-R2 | AI usage section | https://github.com/Narcisss02/StayHealthy/blob/c97e726ba6f963bfd833efe8704faef8e88d593e/README.md?plain=1#L18-L25 | read |
| S1-R3 | AI log for stage 1 | https://github.com/Narcisss02/StayHealthy/blob/main/ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | https://github.com/Narcisss02/StayHealthy/blob/c97e726ba6f963bfd833efe8704faef8e88d593e/index.html#L10-L58 | open the page |
| S1-R5 | finished card looks different | https://github.com/Narcisss02/StayHealthy/blob/c97e726ba6f963bfd833efe8704faef8e88d593e/CSS/style.css#L147-L153 | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | https://github.com/Narcisss02/StayHealthy/blob/a11efb51e3fbb65f9ad7a59d3a5282801a18aaa9/CSS/style.css#L169-L173 | resize < 700px |
| S1-R7 | visible focus, readable dark theme | https://github.com/Narcisss02/StayHealthy/blob/a11efb51e3fbb65f9ad7a59d3a5282801a18aaa9/CSS/style.css#L163-L185 | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | c97e726ba6f963bfd833efe8704faef8e88d593e | commit history |

## Stage 2 Checklist (To be filled after git push)
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | https://github.com/Narcisss02/StayHealthy/blob/40c3181c069fb823d3a618d415493e32454e8c0d/index.html#L67 | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | https://github.com/Narcisss02/StayHealthy/blob/40c3181c069fb823d3a618d415493e32454e8c0d/antrenamente.js#L1-L5 | read |
| S2-R3 | list, count, search, add, toggle, delete | https://github.com/Narcisss02/StayHealthy/blob/40c3181c069fb823d3a618d415493e32454e8c0d/antrenamente.js#L9-L53 | console output |
| S2-R4 | add rejects empty name and invalid tag | https://github.com/Narcisss02/StayHealthy/blob/40c3181c069fb823d3a618d415493e32454e8c0d/antrenamente.js#L28-L36 | last 2 console lines |
| S2-R5 | original array unchanged after add | https://github.com/Narcisss02/StayHealthy/blob/40c3181c069fb823d3a618d415493e32454e8c0d/antrenamente.js#L64 | console line |
| S2-R6 | README Stage 2 section + AI log | https://github.com/Narcisss02/StayHealthy/blob/40c3181c069fb823d3a618d415493e32454e8c0d/README.md?plain=1#L32 | read |
| S2-R7 | commit "Stage 2" pushed | 40c3181c069fb823d3a618d415493e32454e8c0d | commit history |

## Stage 3 Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S3-R1 | npm run dev starts without errors | https://github.com/Narcisss02/StayHealthy/blob/034147abdef8bb44bd49be36a687b6f1520abd1e/frontend/package.json | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | https://github.com/Narcisss02/StayHealthy/blob/034147abdef8bb44bd49be36a687b6f1520abd1e/frontend/src/App.jsx#L12-L20 | edit data, save |
| S3-R3 | data from README, not from the example | https://github.com/Narcisss02/StayHealthy/blob/034147abdef8bb44bd49be36a687b6f1520abd1e/frontend/src/App.jsx#L3-L7 | compare with README |
| S3-R4 | stage 1 styles reused | https://github.com/Narcisss02/StayHealthy/blob/034147abdef8bb44bd49be36a687b6f1520abd1e/frontend/src/App.css | look at the page |
| S3-R5 | node_modules ignored, build passes | https://github.com/Narcisss02/StayHealthy/blob/034147abdef8bb44bd49be36a687b6f1520abd1e/frontend/.gitignore | npm run build |
| S3-R6 | README Stage 3 section + AI log | https://github.com/Narcisss02/StayHealthy/blob/034147abdef8bb44bd49be36a687b6f1520abd1e/README.md#L59-L69 | read |
| S3-R7 | commit "Stage 3" pushed | 4b929a838fd2ad5fa4fd2e456e128761bde45747 | commit history |

## Stage 4 Checklist
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S4-R1 | 2+ components in src/components/ | https://github.com/Narcisss02/StayHealthy/tree/main/frontend/src/components | open folder |
| S4-R2 | card receives data through props | https://github.com/Narcisss02/StayHealthy/blob/7a6918915e3486cede5f71e59dea8ae6455083a2/frontend/src/components/AntrenamentCard.jsx#L3 | read |
| S4-R3 | map + key={id}, no console warnings | https://github.com/Narcisss02/StayHealthy/blob/7a6918915e3486cede5f71e59dea8ae6455083a2/frontend/src/components/AntrenamentList.jsx#L10 | F12, Console |
| S4-R4 | message for empty list | https://github.com/Narcisss02/StayHealthy/blob/7a6918915e3486cede5f71e59dea8ae6455083a2/frontend/src/components/AntrenamentList.jsx#L4 | set array to [] |
| S4-R5 | state changes the card look | https://github.com/Narcisss02/StayHealthy/blob/7a6918915e3486cede5f71e59dea8ae6455083a2/frontend/src/components/AntrenamentCard.jsx#L5 | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | https://github.com/Narcisss02/StayHealthy/blob/main/README.md | read |
| S4-R7 | commit "Stage 4" pushed | https://github.com/Narcisss02/StayHealthy/commit/113bf8994407cf975a55da0fd2f3a7dfb8e3a265 | commit history |

## Stage 5 Checklist
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S5-R1 | list kept in useState, in App | [App.jsx#L17](link) | read |
| S5-R2 | toggling changes state and card look | [App.jsx#L21-L25](link) | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx#L28-L30](link) | click Delete |
| S5-R4 | header counter derived, not in state | [App.jsx#L39](link) | toggle, watch header |
| S5-R5 | immutable updates (no push, splice) | [App.jsx#L22-L24](link) | read |
| S5-R6 | light/dark toggle: state + data-theme | [App.jsx#L34-L36](link) | click the button |
| S5-R7 | no console warnings; README + AI log | [README.md#L..](link) | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [link to the commit](link) | commit history |
