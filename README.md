# 🎧 Spotify UI Clone

Welcome to my Spotify UI Clone! Fun fact: I literally built this entire thing from scratch while blasting music *on* Spotify. 

> **The Vibe:** No vibecoding. No shortcuts. Just me, VS Code, a killer playlist, and a second monitor staring at the real Spotify web player to get every pixel, gradient, flexbox, and overlapping `div` exactly right. 

This project is a deep-dive visual study into modern frontend development, complex layout structuring, and advanced utility-class styling. 

---

### ⚠️ The "Don't Sue Me" Disclaimer
This is strictly a **frontend UI/UX practice project**. It looks identical to the real thing, but it is not the real thing. Don't expect the play buttons to actually stream your favorite tracks just yet—many of the interactive elements are just visual placeholders. The goal here was mastering React layouts and Tailwind CSS, not building full-stack audio streaming infrastructure!

---

## 🔬 The Deep Dive: What's Inside

Replicating a billion-dollar app's UI takes more than just basic CSS. Here are the specific technical details of what makes this clone tick:

*   **Pixel-Perfect Layouts:** Matched Spotify's exact dark mode color palette (`#121212` backgrounds, `#1ed760` accents), typography weights, and precise padding/margins.
*   **Persistent UI with React Router:** Used an `<Outlet />` layout structure. This means the Sidebar, Navbar, and (future) Bottom Player stay completely static and mounted, while only the main viewing area changes when you click a playlist or album.
*   **Custom Data Hooks:** Built a custom `useFetch` hook to consume a local mock database, handling loading states, mapping through arrays, and rendering dynamic song lists.
*   **Utility Functions:** Hand-wrote JavaScript logic to take raw millisecond data from the database and convert it into cleanly padded `MM:SS` timestamps (e.g., `4:05`).

---

## 🛠️ Tech Stack

*   **React:** Component architecture, hooks (`useState`, `useEffect`), and state management.
*   **Tailwind CSS:** For exact, utility-first styling and complex gradient/opacity handling.
*   **React Router DOM:** For handling nested routes and layout wrappers.
*   **Lucide React:** For crisp, scalable, lightweight UI icons.
*   **JSON Server:** To fake a backend REST API for fetching playlists, album data, and songs.

---

## 🚀 Getting Started

Want to run this locally on your machine? You'll need to fire up both the frontend React app and our fake backend database at the same time.

### Step 1: Start the Frontend React App
Open your terminal and run the following commands:

```bash
# Move into the project directory
cd spotify_clone

# Install standard dependencies
npm install

# Install the specific packages powering the routing, icons, and backend
npm install react-router-dom lucide-react json-server

# Fire up the Vite development server
npm run dev

# Watch the database file and serve it on port 3000
npx json-server --watch db1.json --port 3000