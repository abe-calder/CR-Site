# 👑 CR-Site: Clash Royale Player Stats Explorer

## Table of Contents
* [About the Project](#-about-the-project)
* [Features](#sparkles-features)
* [Technologies](#gear-technologies)
* [Getting Started](#rocket-getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#mag-usage)
* [Project Structure](#file_folder-project-structure-optional)
* [Contributing](#handshake-contributing)

---

## 📖 About the Project

**CR-Site** is a web application designed to fill the information gaps in the official Clash Royale mobile app. By using a player's unique player-tag, this site fetches and displays specific, detailed player statistics and metrics that are currently unavailable to view directly in the game's interface.

It utilizes an API (The official Clash Royale API) to provide a deeper dive into player profiles, helping players and competitive clans analyze performance beyond the basics.

## ✨ Features

* **Player Tag Lookup:** Instantly retrieve stats for any player using their in-game player-tag.
* **Detailed Metrics:** View comprehensive game statistics . (e.g., Specific battle logs, win-rate breakdown, detailed card levels, all of the users max level cards (lvl 15), A search feature to view stats of players cards, Top 10 current global leaderboard)
* **Responsive UI:** A clean, responsive interface for easy viewing on desktop.
* **API-Driven Backend:** Robust server-side logic to securely fetch and process game data.

## ⚙️ Technologies

This project is a full-stack application built with modern technologies.

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **TypeScript, SCSS, HTML** | Type-safe client-side logic and custom styling. |
| **Build Tool** | **Vite** | Fast development server and optimized build process. |
| **Backend/API** | **Node.js / Express** (likely) | Server-side routing, API key management, and data fetching. |
| **API** | Clash Royale API (or similar) | Used to fetch real-time player data. |

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development or testing.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your machine.

* [Node.js](https://nodejs.org/en/) (v16.x or higher recommended)
* **Clash Royale API Key:** This is essential for the server to fetch data. You can obtain one from the official Supercell developer portal.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/abe-calder/CR-Site.git](https://github.com/abe-calder/CR-Site.git)
    cd CR-Site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure API Key (Crucial Step):**
    Create a file named `.env` in the root of the project and add your Clash Royale API Key.

    ***`.env` example:**
    ```
    # Replace YOUR_API_KEY_HERE with your actual key
    CLASH_ROYALE_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Run the development server:**
    The following command will start both the backend server and the frontend client concurrently.
    ```bash
    npm run dev
    ```

### Accessing the application

* **Client (Web App):** The frontend should be running at `http://localhost:5173`
* **Server (API):** The backend API should be running at `http://localhost:3000`

---

## 🔍 Usage

Once the application is running, open the client URL (`http://localhost:5173`) in your browser.

1.  Enter the player-tag (e.g., `#P0P0L0L0`) into the search field.
2.  The application will display the extended, non-mobile-app stats for that player.

---

## 📂 Project Structure (Optional)

A brief breakdown of the main directories:

* `client/`: Contains all frontend code, including components, assets, and styling.
* `server/`: Contains all backend code, including the API routes, data fetching logic, and API key handling.
* `models/`: Defines data structures or TypeScript interfaces used throughout the application.

---

## 👋 Contributing

I welcome contributions! If you have suggestions for features, bug fixes, or want to improve the codebase, please feel free to open an issue or submit a Pull Request.

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---
