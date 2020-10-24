const varietyOfCharacters = 256;
const canvas = document.getElementById("matrix_effect");
const width = canvas.width;
const height = canvas.height;
const context = canvas.getContext("2d");
const columnsCount = Math.floor(width / 20) * 2;
const yPos = Array(columnsCount).fill(0);

context.fillStyle = "rgb(0, 20, 0)"; // background color
context.fillRect(0, 0, width, height); //draws the background

function matrix() {
    context.fillStyle = "rgb(0, 20, 0, .1)";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "rgb(0, 256, 0, .7)";
    context.font = "20px Modeseven-L3n5";
    yPos.map((y, index) => {
        let text = String.fromCharCode(Math.floor(Math.random() * varietyOfCharacters));
        let xPos = index * 10;
        context.fillText(text, xPos, y);
        if (y > Math.random() * height * 20) {
            yPos[index] = 0;
        } else {
            yPos[index] = y + 20;
        }
    });
}

if (window.screen.width > 720) {
    window.setInterval(matrix, 75);
} 