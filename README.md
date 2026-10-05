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
* Stage 1: Used Gemini to generate the grid/flexbox layout, CSS variables for dark mode. See the `ai-log/` folder.

## How to run
Open `index.html` in a browser. No build step, no server.
For Stage 2, press F12 to open the Developer Tools and view the logic tests in the Console.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

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
