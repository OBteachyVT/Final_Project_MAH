# Final_Project_MAH
My Astrology Hub -- Final Project EDCI 5003
Project Explanation
"My Astrology Hub" is a web application designed as a final project to showcase foundational front-end web development skills. It provides users with a platform to explore personal planetary astrology and generate a personalized report based on manually entered astrological placements. The site emphasizes a clean, responsive design and interactive JavaScript functionalities.

Implemented Features
This project demonstrates the following key web development concepts and features:

HTML Structure & Semantics:
Uses modern HTML5 semantic elements (<header>, <nav>, <main>, <section>, <footer>, <ul>, <li>, <a>, <img>, <form>, <label>, <input>, <select>, <option>, <blockquote>, <p>, <h3>, <h2>, <h1>) for clear organization, readability, and accessibility.

Organizes content across multiple HTML pages (index.html, manual-report.html, report.html, about.html, sun.html, moon.html, mercury.html, venus.html, mars.html, rising.html, attributions.html).

CSS Styling & Layout:

External CSS: All styling is managed in a single, external style.css file for consistent application across the entire site.

Flexbox: Utilized for flexible layouts, particularly for navigation and content grids on the landing page.

Responsive Design: Implements @media queries to ensure the site's layout and elements adapt gracefully to various screen sizes (desktops, tablets, and mobile devices).

Consistent Visual Styling: Applies a cohesive color palette, typography, and spacing for a clear and readable user interface.
JavaScript Functionality:

Functions, Arrays, Conditionals, Loops: JavaScript code is structured using functions (e.g., showCustomAlert, hideCustomAlert, validateAndSubmitManualForm, getInterpretation), processes data using arrays, and employs conditionals and loops for logic and validation.

Event Handling: Responds to user interactions, primarily form submissions (onsubmit) and button clicks (addEventListener).

DOM Manipulation: Dynamically updates page content (e.g., displaying report data on report.html, showing/hiding custom alert boxes) by selecting and modifying HTML elements.

Form Validation: Includes client-side JavaScript validation for all required fields in the manual report form, preventing submission of incomplete data and providing clear feedback via a custom alert box.

Data Usage (localStorage): Leverages localStorage to store user-entered planetary data from manual-report.html, allowing this data to be retrieved and displayed on report.html across page loads within the same browser session.

Project Requirements:

Functional HTML Form with JS Validation: The manual-report.html page features a complete form with robust JavaScript validation.

Working Navigation System: A consistent navigation bar is present on all main pages, allowing intuitive movement throughout the site.

Image Integration & Attribution: Images are integrated into relevant pages and properly attributed on a dedicated "Image Attributions" page, linked from the footer.
