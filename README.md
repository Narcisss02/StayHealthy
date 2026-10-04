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
| Gemini | Assisting with generating the initial Stage 1 HTML, CSS mockup, and project structure based on the assignment PDF. |

Details per stage:
* Stage 1: Used Gemini to generate the grid/flexbox layout, CSS variables for dark mode, and adapt the gym theme. See the `ai-log/` folder.

## How to run
Open `index.html` in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Stage 1 Checklist (To be filled after git push)
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | README.md | read |
| S1-R2 | AI usage section | README.md | read |
| S1-R3 | AI log for stage 1 | ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | index.html#L1-L50 | open the page |
| S1-R5 | finished card looks different | style.css#L80-L90 | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | style.css#L100-L110 | resize < 700px |
| S1-R7 | visible focus, readable dark theme | style.css#L115-L135 | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | link-to-commit | commit history |