# My Live Clock

A beginner-friendly clock website using HTML, CSS, JavaScript, Node.js and Express.
It shows your computer's local time in 24-hour format and today's date.

## Run the website

Open a terminal in this `test` folder and run:

```sh
npm install
npm start
```

Open http://localhost:3000 in your browser. Press Ctrl+C in the terminal to stop the server.

If PowerShell blocks `npm`, use `npm.cmd install` and `npm.cmd start` instead.

## Files

- `server.js` starts Express and serves the website.
- `public/index.html` contains the page content.
- `public/style.css` styles the clock card.
- `public/script.js` updates the time and date every second.
