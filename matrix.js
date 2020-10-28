var varietyOfCharacters = 256;
var canvas = document.getElementById("matrix_effect");
var width = canvas.width;
var height = canvas.height;
var context = canvas.getContext("2d");
var columnsCount = Math.floor(width / 20) * 2;
var yPos = Array(columnsCount).fill(0);

context.fillStyle = "rgb(0, 10, 0)";
context.fillRect(0, 0, width, height);

var text, xPos;
function matrix() {
    context.fillStyle = "rgb(0, 10, 0, .1)";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "rgb(0, 256, 0, .7)";
    context.font = "22px Modeseven-L3n5";
    yPos.map(function (y, index) {
            text = String.fromCharCode(Math.floor(Math.random() * varietyOfCharacters));
            xPos = index * 10;
            context.fillText(text, xPos, y);
            if (y > Math.random() * height * 20) {
                yPos[index] = 0;
            } else {
                yPos[index] = y + 20;
            }
        });
}

window.setInterval(matrix, 75);
