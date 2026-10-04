# Stage 1: AI log

## Tools
- Gemini

## Conversations
Link: (https://share.gemini.google/S988i90OleWF)

## Key requests

1. Connecting the CSS file
- Asked: I added the CSS code and created a separate folder for it, but the styling is not applied when opening the site. What did I do wrong?
- Got: The AI explained that the `href` path in the `<link>` tag needs to match the exact folder structure. It provided options to either move the file or update the path to `css/style.css`.
- Changed or rejected: I updated the HTML link tag to correctly point to the `css/style.css` directory instead of moving the file.

2. Creating the CSS layout and theme
- Asked: I need help with the CSS code to define the page theme and layout structure.
- Got: The AI provided the CSS code utilizing CSS variables for colors, Flexbox for the forms and cards, CSS Grid for the column layout, and `@media` queries for the dark mode.
- Changed or rejected: I used the provided code as it was, because it was already adapted for my custom difficulty labels (usor, mediu, intens) and the StayHealthy app theme.

## What I learned / what did not work
I learned how to structure a CSS file using custom root variables for themes and how to rapidly prototype a layout using CSS Grid and Flexbox for forms and lists.