# Pixabay Image Gallery - React & Tailwind CSS
Simple gallery with images from the pixabay API. Tailwind css is built into workflow with postcss and autoprefixer.

## Usage
Add your Pixabay [API KEY](https://pixabay.com/api/docs/) to .env go to free API Image Gallery.
```bash
    # Install dependencies
    npm install

    # Watch CSS & run server on :3000
    npm start

    # Build CSS and assets
    npm run build
```


## Available Scripts

1. In the project directory, you can run:
```bash
    npx create-react-app .
    
    npm i -D tailwindcss postcss-cli autoprefixer
    npx tailwind init tailwind.js --full
```
2. Create file postcss.config.js
```bash
  $ touch postcss.config.js

    const tailwindcss = require("tailwindcss");
    module.exports = {
      plugins: [
        tailwindcss("./tailwind.js"), 
        require("autoprefixer")
      ],
    }
```
3. Also create two file 'src/assets/main.css' & 'src/assets/tailwind.css'
```bash
    # @import 'tailwindcss/base';
    # @import 'tailwindcss/components';
    # @import 'tailwindcss/utilities';
```
4. In modify package.json
```bash
    script:
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "...",
    "eject": "...",
    "watch:css": "npx postcss src/assets/tailwind.css -o src/assets/main.css",
    "build:css": "npx postcss src/assets/tailwind.css -o src/assets/main.css"
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

