const changeColorButton = document.getElementById('change-color-button');
const body = document.body;

changeColorButton.addEventListener('click', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = '#' + randomColor;
});