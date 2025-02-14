# Game Showcase...

Game Showcase is a sleek, responsive web application designed to display a collection of games. Built with TailwindCSS and JavaScript, it dynamically loads game data from a `JSON` file, making it easy to manage and update the list of games.

## Features

- **Dynamic Game List**: Games are loaded dynamically from a `games.json` file.
- **Responsive Design**: Works seamlessly across devices with a modern, dark-themed UI.
- **Live Previews**: Each game opens in a new tab or iframe for direct interaction.
- **Dynamic Date & Time**: The current date and time are displayed in the navbar and updated in real-time.
- **Scalability**: Easily add more games by updating the `games.json` file.

---

## Demo

Check out the live version of the project here: [Game Showcase Live](https://gaming-seven-lac.vercel.app/).

---

## Installation

1. Clone the repository:
   ```bash
   https://github.com/CodeMaverick-143/TimePass.git
   cd Gaming_Showcase
   ```

2. Open the project in your favorite code editor.

3. Place your game thumbnails and assets in the appropriate directory.

4. Add your game information in the `games.json` file.

5. Launch the project:
   - Open `index.html` in your browser.
   - Alternatively, use a live server like VSCode Live Server for better development experience.

---

## File Structure

```plaintext
project/
│
├── index.html           # Main HTML file
├── style.css            # Custom styles
├── script.js            # JavaScript for dynamic content
├── games.json           # Game data file
├── assets/              # Assets folder for images, icons, etc.
│   ├── thumbnails/      # Game thumbnails
│   └── default-thumbnail.jpg
└── README.md            # Documentation
```

---

## `games.json` Format

The `games.json` file stores game information in the following format:

```json
[
  {
    "title": "Game Title",
    "description": "Short description of the game.",
    "url": "https://link-to-game.com",
    "thumbnail": "path-to-thumbnail.jpg"
  }
]
```

---

## Customization

### Add New Games

1. Add a new entry in `games.json` with the following fields:
   - `title`: The name of the game.
   - `description`: A short description of the game.
   - `url`: The link to the game's page.
   - `thumbnail`: (Optional) Path to the game's thumbnail image.

2. Save the changes. The new game will be automatically displayed when you refresh the page.

---

## Technologies Used

- **HTML5**
- **CSS3** (with TailwindCSS)
- **JavaScript (ES6)**

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for improvements or new features.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements

- [TailwindCSS](https://tailwindcss.com) for providing a modern and flexible styling framework.
- All developers who contributed to the games featured in this showcase.

--------
