# Stage 5: AI log

## Tools
- Gemini

## Conversations
- https://share.gemini.google/HVJK7fUbyCW2

## Key requests

### 1. State setup and event handling
- Asked: I need to update my files for Stage 5 to handle state and events, specifically for tracking the workouts and adding dark mode functionality.
- Got: Gemini provided the updated `App.jsx` with `useState` for the workouts array and the theme, along with immutable toggle/delete functions. It also explained how to pass these functions as props to the list and card components.
- Changed or rejected: Kept as suggested, integrating the custom StayHealthy logic.

### 2. CSS Missing / Unstyled Page
- Asked: My site suddenly looks like raw HTML without any styles, I shared an image of the issue.
- Got: Gemini pointed out that the CSS file import `import "./App.css";` was missing or improperly linked in `main.jsx` / `App.jsx`.
- Changed or rejected: I added the missing import and the styling was restored perfectly.

## What I learned / what did not work
I learned how to use React's `useState` to make an app interactive. I discovered the importance of "controlled inputs" (using both `checked` and `onChange` together to avoid read-only warnings). Finally, I learned how to manipulate a global theme dynamically using an HTML dataset attribute (`data-theme`) and connecting it to a state toggle button in the header.