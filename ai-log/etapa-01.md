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

# Stage 2: AI log

## Tools
- Gemini

## Conversations
- https://share.gemini.google/4foml96DbbEg (Help with JS array methods, immutability, and validation for the StayHealthy app data logic)

## Key requests

### 1. Data Structure creation
- Asked: How to create an array of objects with id, title, boolean state, and specific difficulty tags for a fitness app.
- Got: A sample JavaScript array with 3 workout objects and a constant for allowed difficulty levels.
- Changed or rejected: Kept as suggested, it perfectly matches my HTML mockup data.

### 2. Add Function with Validation and Immutability
- Asked: How to write a function that adds a new workout using the spread operator (no push) and validates the title and difficulty.
- Got: A function using `reduce` to calculate the next ID, `trim()` for title validation, and the spread operator `[...lista, nou]` to return a new array.
- Changed or rejected: Used the code as provided since it fully respects the immutability rule.

### 3. Toggle and Delete Functions
- Asked: How to change the boolean state and delete items without mutating the original array using map and filter.
- Got: Examples of using `map()` to toggle the `finalizat` state and `filter()` to remove an item by ID.
- Changed or rejected: Integrated directly into `antrenamente.js`.

## What I learned / what did not work
I learned how to write immutable functions in JavaScript using the spread operator (`...`) instead of mutating methods like `push`. I also learned how to properly use `map`, `filter`, and `reduce` to manipulate arrays without modifying the original data, which I understand will be essential for React in Stage 5.