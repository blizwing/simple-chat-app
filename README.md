# Simple Chat App

This repository contains a minimal Socket.IO chat application with a built‑in GUI.

## Running the server

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
   The server listens on **port 3000**.

## Accessing the GUI

Open a browser and navigate to `http://<server-ip>:3000/` where `&lt;server-ip&gt;` is
the IP address of the machine running the server. Multiple computers can connect
to this page and chat in real time.

The GUI allows you to join a room and exchange messages with other users.  
It is implemented using modular JavaScript and CSS under `backend/public/`, so you
can easily tweak the look or extend the behavior by editing those files.

## Frontend (optional)

An Angular frontend is included under the `frontend/` directory. It is not
required for basic usage, but you can build and run it with `npm start` inside
that folder.
