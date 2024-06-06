# React + Vite

This is a simple Vite + React application that fetches and displays information about planets from the Star Wars API (SWAPI). The application includes filters for population, climate, and terrain, and assigns random images to each planet to enhance visual appeal.

## Assumptions

The application assumes there are 8 planet images available.
These images are assigned randomly to each planet to improve visual appeal.
The images are stored in the src/assets directory.

## Features

Fetches and displays a list of planets from the SWAPI.
Includes filters for population, climate, and terrain.
Randomly assigns one of the 8 available images to each planet.

## Prerequisites

1. Node.js (>= 12.x.x)
2. npm (>= 6.x.x) or yarn (>= 1.x.x)

### Getting Started

1. Clone the Repository

```sh
git clone https://github.com/your-username/vite-react-planet-app.git
cd vite-react-planet-app
```

2. Install Dependencies
   **Using npm:**

```sh
npm install
```

**Using yarn:**

```sh
yarn install
```

3. Run the Application

**Using npm:**

```sh
npm run dev
```

**Using yarn:**

```sh
yarn dev
```

The application will be available at http://localhost:5173.

## Available Scripts

```sh
npm run dev or yarn dev
```

Runs the app in development mode. Open http://localhost:5173 to view it in the browser.

```sh
npm run build or yarn build
```

Builds the app for production to the dist folder.

```sh
npm run serve or yarn serve
```

Serves the production build from the dist folder.

## Acknowledgements

SWAPI for the Star Wars API.
Vite for the build tool.
React for the UI library.
