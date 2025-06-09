# Fetch and Display Data from a Public API

This project demonstrates how to fetch user data from a public API using JavaScript's Fetch API and dynamically display it on a webpage. It also includes error handling and a reload button for refetching data.

## Objective
- Fetch user data from a public API.
- Display user names, emails, and addresses in a user-friendly format.
- Handle potential errors like network issues.

## Features
- Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- Displays user information in styled cards.
- Handles network errors gracefully.
- Includes a reload button to refetch data.

## Tools Used
- **HTML** for the structure.
- **CSS** for styling the user cards and layout.
- **JavaScript** for fetching and displaying data dynamically.

## Instructions

### 1. Prerequisites
- A text editor (e.g., VS Code).
- A modern web browser (e.g., Chrome).

### 2. Setup
1. Copy the `index.html` file content provided above into a new file named `index.html`.
2. Save the file in a directory of your choice.
3. Do same with the style.css and script.js files.

### 3. Usage
1. Open the `index.html` file in your browser.
2. Wait for the user data to load and display in styled cards.
3. Use the **Reload** button to refetch data if needed.
4. Test error handling by disconnecting your internet and clicking the **Reload** button.

### 4. File Structure
```
project-directory/
│
├── index.html # Contains the HTML structure of the project
├── style.css # Contains the CSS styling for the project
└── script.js # Contains the JavaScript code to fetch and display data
```

### 5. Project Walkthrough
1. **Fetch API**:
   - Fetches data from the API endpoint `https://jsonplaceholder.typicode.com/users`.
   - Parses the JSON response.
   - Dynamically creates and appends user data cards to the page.

2. **Error Handling**:
   - Displays a custom error message if the API fails or there's no internet connection.

3. **Styling**:
   - Cards are styled with CSS for better readability.
   - Reload button styled for usability.

### 6. Testing
1. **Normal Conditions**:
   - Check that the data is displayed correctly on load.
   - Use the Reload button to confirm the refetch functionality.
2. **Error Conditions**:
   - Disable internet connection and reload the page.
   - Verify that an error message is displayed.

## License
This project is open-source and available under the MIT License.
