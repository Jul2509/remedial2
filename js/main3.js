const cursors = ['pointer', 'crosshair', 'text', 'move', 'help', 'zoom-in', 'zoom-out'];

function randomCursor() {
  const randomIndex = Math.floor(Math.random() * cursors.length);
  const randomCursorValue = cursors[randomIndex];
  document.body.style.cursor = randomCursorValue;
}

randomCursor();
setInterval(randomCursor, 300);