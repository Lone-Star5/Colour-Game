var colors = generateRandomColors(6);
var pickColor = pickedColor();
var numSquares = 6;

var square = document.querySelectorAll(".square");
var rgb = document.getElementById("rgb");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var Btn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	numSquares=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickColor = pickedColor();
	rgb.textContent = pickColor;
	for(var i=0;i<square.length;i++)
	{
		if(colors[i]){
			square[i].style.backgroundColor = colors[i];
		}
		else
			square[i].style.display = "none";
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
})
hardBtn.addEventListener("click",function(){
	numSquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickColor = pickedColor();
	rgb.textContent = pickColor;
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block";
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";

});

resetButton.addEventListener("click",function()
{
	colors = generateRandomColors(numSquares);
	pickColor = pickedColor();
	rgb.textContent = pickColor;
	for(var i=0;i<square.length;i++)
		square[i].style.backgroundColor = colors[i];
	this.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	
});

rgb.textContent = pickColor;

for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click",function()
	{
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickColor)
		{
			message.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again ?";
		}
		else
		{
			this.style.backgroundColor = "rgb(25, 25, 25)";
			message.textContent = "Try Again";
		}
	});
}

function changeColor(color)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = color;
	}
}

function pickedColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var color = [];

	for(var i=0;i<num;i++)
	{
		color.push(randomColor());
	}

	return color;
}

function randomColor()
{
	var red = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	return("rgb("+red+", "+green+", "+blue+")");
}