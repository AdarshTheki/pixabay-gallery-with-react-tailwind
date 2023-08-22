# Pixabay Image Gallery - React & Tailwind CSS
Simple gallery with images from the pixabay API. Tailwind css is built into workflow with postcss and autoprefixer.

## Usage
Add your Pixabay [API KEY](https://pixabay.com/api/docs/) to .env go to free API Image Gallery.

1. Clone the repository: `git clone https://github.com/AdarshTheki/pixabay-gallery-with-react-tailwind.git`
2. Navigate to the project directory: `cd image-gallery`
3. Install dependencies: `npm install`
4. Start the development server: `npm run start`

## Available Scripts

1. In the project directory, you can run:
```bash
    npm i -D tailwindcss postcss-cli autoprefixer
    npx tailwind init tailwind.js --full
```
2. Create file postcss.config.js
```js
  // touch postcss.config.js
    const tailwindcss = require("tailwindcss");
    module.exports = {
      plugins: [
        tailwindcss("./tailwind.js"), 
        require("autoprefixer")
      ],
    }
```
3. Also create two file 'src/assets/main.css' & 'src/assets/tailwind.css'
```css
    # @import 'tailwindcss/base';
    # @import 'tailwindcss/components';
    # @import 'tailwindcss/utilities';
```
4. In modify package.json
```js
    script:
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "...",
    "eject": "...",
    "watch:css": "npx postcss src/assets/tailwind.css -o src/assets/main.css",
    "build:css": "npx postcss src/assets/tailwind.css -o src/assets/main.css"
```
## Contributing

This can include guidelines for creating issues, submitting pull requests, and coding standards.
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make changes and commit: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request.

## License

This project is licensed under the [License Name] License - see the [LICENSE](LICENSE) file for details.

## Contact

[Adarsh Verma] - [adarshverma549@gmail.com]

Project Link: []