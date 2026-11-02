Stage 6: AI log

Tools

Gemini

Link: https://share.gemini.google/bPshRikxomY5

Key requests

1. Mock API setup and environment variables

Asked: How to set up Stage 6 and fetch data from the mock API instead of hardcoded arrays.

Got: Instructions to install json-server@0.17.4, create db.json, and set up api.js using import.meta.env.VITE_API_URL. Also got the updated App.jsx using useEffect for data fetching.

Changed or rejected: Kept as suggested, integrating the custom "antrenamente" endpoint.

2. API startup error

Asked: I got an error when trying to run the API.

Got: Gemini provided a troubleshooting list checking folder location, json-server version, db.json existence, and the "api" script in package.json.

Changed or rejected: I realized I forgot to add the "api" script in package.json. Added it and the server started successfully.

3. React concepts clarification

Asked: What exactly do the fetch command and className attribute do?

Got: Gemini explained that fetch is a JavaScript function used to make HTTP requests to a server (returning a promise handled with async/await). It also explained that className is the JSX equivalent of the HTML class attribute, used because class is a reserved keyword in JavaScript.

Changed or rejected: Read and understood the concepts.

4. CSS Hover animations for icons

Asked: How can I create a hover animation on icons and what code do I need for this?

Got: Code snippets using the CSS transition property on the base element (for a smooth effect) and transform: scale() / transform: rotate() on the :hover pseudo-class.

Changed or rejected: Added the provided CSS to my App.css file to make the delete button and theme toggle more interactive.

What I learned / what did not work

I learned how to use useEffect to fetch data when a React component mounts and how to handle the three states of a request: loading, success, and error. I also learned how to use json-server to mock a REST API, what fetch does under the hood, and why React uses className instead of class. Finally, I improved my UI by adding smooth CSS hover animations using transition and transform.