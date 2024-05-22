# Simple Restaurant: Mastering Webpack

This repository contains a project challenge from the Odin Project curriculum aimed at mastering Webpack. The project involves setting up a simple restaurant website using Webpack for module bundling and managing assets.

Live preview-([click here](https://ozioma45.github.io/Restaurant_page/))

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Overview

The goal of this project is to practice using Webpack to bundle JavaScript modules and assets for a small web project. This challenge is part of the Odin Project curriculum, which is designed to teach full-stack web development.

## Features

- Webpack setup for bundling JavaScript modules
- Separate modules for Home, Menu, and Contact pages
- Dynamic content loading based on navigation tabs
- Simple and clean HTML structure
- CSS handling and bundling with Webpack

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ozioma45/Restaurant_page.git
   cd odins_projects
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Restaurant_Page
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

## Usage

To run the project locally, use the following commands:

1. **Build the project using Webpack:**

   ```bash
   npx webpack
   ```

2. **Open `dist/index.html` in your browser to view the project:**

Alternatively, you can use the watch mode to automatically rebuild the project on changes:

```bash
npx webpack --watch
```

## File Structure

```
Restaurant_Page/
├── dist/
│   └── index.html
├── src/
│   ├── contact.js
│   ├── home.js
│   ├── index.js
│   ├── menu.js
│   └── styles.css
├── .gitignore
├── package-lock.json
├── package.json
└── webpack.config.js
```

- `dist/`: Directory containing the bundled output.
- `src/`: Directory containing the source code.
  - `contact.js`: Module for the Contact page.
  - `home.js`: Module for the Home page.
  - `index.js`: Main entry point for the application.
  - `menu.js`: Module for the Menu page.
  - `styles.css`: CSS file for styling the project.
- `.gitignore`: File specifying which files to ignore in the repository.
- `package-lock.json`: Automatically generated file for locking the dependencies.
- `package.json`: File specifying project dependencies and scripts.
- `webpack.config.js`: Webpack configuration file.

## Technologies Used

- HTML5
- CSS3
- JavaScript ES6+
- Webpack

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) for providing this challenge and the curriculum.
- Webpack documentation for extensive resources and tutorials.

```

```
