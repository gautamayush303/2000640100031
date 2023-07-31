# Train Schedule React App

Welcome to the Train Schedule React App! This is a web application built using React to display  train schedules along with seat availability and prices for different coach types (Sleeper and AC). The app allows users to view train details without the need for registratio. The train schedule is sorted in ascending order of price, descending order of ticket availability, and descending order of departure time (after considering delays).

## Project in the Master Branch

**Note**: The code for this project is located in the master branch of the repository.

## Getting Started

### Prerequisites

Before you start, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org) (LTS version recommended) - It includes npm (Node Package Manager) to manage dependencies.

### Installation

1. Clone the repository to your local machine using Git:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd train-schedule-react-app
```

3. Install the dependencies:

```bash
npm install
```

## Running the App

After the installation is complete, you can start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. The page will automatically reload if you make changes to the code.

## Project Structure

The project structure follows a standard React setup with additional directories for organizing components, styles, and other assets. Here's the basic structure:

```
train-schedule-react-app/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── components/
  │   ├── styles/
  │   ├── App.js
  │   └── index.js
  ├── .gitignore
  ├── package.json
  └── README.md
```

- The `public/` directory contains the `index.html` file, the entry point of our app.
- The `src/` directory contains the main source code of the app.
  - The `components/` directory contains React components used in the app.
  - The `styles/` directory contains CSS or other styling files.
  - `App.js` is the main component where the app is initialized.
  - `index.js` is the entry point for rendering the app in the DOM.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the development server.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production in the `build/` directory.
- `npm run eject`: Removes the single build dependency and copies configuration files into the project. **Note: This is a one-way operation. Once you run eject, you can't go back!**

## Deployment

To deploy the app for production, use the following command:

```bash
npm run build
```

This will create an optimized build in the `build/` directory that can be deployed to a web server.

## Contributing

We welcome contributions to improve this project! To contribute, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a descriptive commit message.
4. Push your changes to your forked repository.
5. Create a pull request to merge your changes into the master branch of the main repository.


Enjoy exploring the Train Schedule React App! 🚂🚄🚆
