# Stage 4: AI log

## Tools
- Gemini

## Conversations
Link: https://share.gemini.google/QeClrH6Qo2Gz (Discussed React component architecture, props, and rendering lists with map).

## Key requests

### 1. Stage 4 requirements breakdown

Asked: Analyze the Stage 4 guide and tell me exactly what I have to do.

Got: Gemini provided a clear, step-by-step guide tailored to my app. It explained how to create the components folder, write AntrenamentCard and AntrenamentList, pass props, and integrate everything into App.jsx while avoiding the common key warning.

Changed or rejected: I followed the steps exactly to structure my React project properly.

### 2. Code for the Card Component

Asked: Can you give me the code for AntrenamentCard.jsx?

Got: The complete JSX code for the component. It included destructured props ({ antrenament }), a dictionary (ETICHETE_DIFICULTATE) to format the tags, and conditional CSS classes (like adding the done class if the workout is finished).

Changed or rejected: Kept as suggested. It perfectly integrated my CSS classes (item-card, badge, status) from Stage 1 into dynamic React logic.

### What I learned / what did not work

I learned how to split a static HTML UI into reusable React components. I now understand how to pass data from a parent component to a child using props. I also learned about conditional rendering (using the ternary operator ? :) to change CSS classes dynamically, and I understood why React needs a unique key prop when rendering lists with .map().