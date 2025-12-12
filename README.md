# myFlix React Bootstrap Styling

This project is a React-based movie application styled with **React Bootstrap** components for a responsive, modern user interface.

## ✨ Features
- Responsive layout using Bootstrap's grid system (`Container`, `Row`, `Col`)
- Movie cards styled with `Card` components
- Login form with username and password inputs
- Global Bootstrap CSS integration
- Clean, professional UI with SCSS styling
- Built with React 18.2.0 and React Bootstrap 2.9.0

## 📋 Components
- **LoginView** - User login form with validation
- **MainView** - Movie listing display
- **MovieCard** - Individual movie card component

## 🚀 Installation & Setup
Clone the repository and install dependencies:

```bash
git clone https://github.com/G1tHubLloyd/myFlix-ReactBootstrap-Styling.git
cd myFlix-ReactBootstrap-Styling
npm install
npm start
```

The app runs at the next available port (e.g., `http://localhost:3000`, `3001`, `3002`).

## 📦 Dependencies
- **react** (^18.2.0) - JavaScript library for building user interfaces
- **react-dom** (^18.2.0) - React package for DOM rendering
- **react-bootstrap** (^2.9.0) - Bootstrap components as React components
- **bootstrap** (^5.3.0) - CSS framework
- **sass** (^1.96.0) - CSS preprocessor
- **react-scripts** (^5.0.1) - Build and development scripts

## 🎬 Project Structure
```
src/
├── App.jsx           - Main application content (wrapped by Container in index.jsx)
├── index.jsx         - React entry point (global Bootstrap Container wrapper)
├── index.scss        - Global styles and custom theme overrides
└── components/
    ├── LoginView.jsx - Login form component
    ├── MainView.jsx  - Movies list component (Bootstrap Row/Col grid)
    └── MovieCard.jsx - Individual movie card component
```

## 🎨 Styling
- Custom SCSS theme in `src/index.scss` for consistent typography, buttons, cards, and form inputs.
- Uses Bootstrap variables and lightweight overrides (hover transitions, shadows, rounded corners).

## 🔧 Layout
- Global `Container` applied in `index.jsx` for responsive spacing.
- View-level grids built with `Row` and `Col` in `MainView.jsx`.

## 🧭 Workflow
- Active branch: `feature/react-bootstrap-styling`
- Pull request: https://github.com/G1tHubLloyd/myFlix-ReactBootstrap-Styling/pull/1

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at `http://localhost:3000`

### `npm build`
Builds the app for production in the `build` folder

### `npm test`
Launches the test runner

## 📝 License
ISC



