Here’s a revised README for your "SJC Notice App" that reflects the correct tech stack and details:

---

# SJC Notice App

## Overview

The **SJC Notice App** is a modern web application designed for St. Joseph College (SJC) students to keep them informed about the latest notices and announcements. With a clean and responsive interface, the app provides real-time updates to ensure students never miss important information.

## Tech Stack

The application is built using a robust tech stack that includes:

- **Frontend:**
  - **Svelte**: A progressive JavaScript framework for building user interfaces.
  - **Axios**: A promise-based HTTP client for making API requests.
  - **Tailwind CSS**: A utility-first CSS framework for rapid styling and responsive design.

- **Backend:**
  - **Express**: A web framework for Node.js, used for building RESTful APIs.
  - **Bun**: A modern JavaScript runtime that improves performance and development speed.
  - **Prisma**: A next-generation ORM for Node.js and TypeScript that simplifies database interactions.
  - **MongoDB**: A NoSQL database used for storing notices, allowing for flexibility and scalability.

## Pages

The application includes the following key pages:

1. **Home Page**: Displays a list of the latest notices in a user-friendly format.
2. **Notice Details**: (Future feature) Provides detailed information about each notice.

## Features

- **Responsive Design**: Fully optimized for mobile and desktop devices, ensuring a seamless user experience.
- **Real-Time Updates**: Notices are fetched from the backend using Axios, providing users with the latest information.
- **Interactive UI**: Built with Svelte and Tailwind CSS, the application features an attractive design with smooth animations.
- **User-Friendly Experience**: The layout prioritizes usability, making it easy for students to find and access important notices.

## Installation

To run the SJC Notice App locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/mmycin/SJC-Notice-App.git
   cd sjc-notice-app
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Set up your MongoDB database:
   - Ensure you have MongoDB installed and running.
   - Create a database named `SJCNotice` and a collection named `Notice`.
   - Populate the collection with sample notice data.

4. Start the backend server:
   ```bash
   bun run server.js
   ```

5. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```

6. Start the frontend:
   ```bash
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:5173` to view the application.

