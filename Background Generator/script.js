var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var bgColor = window.getComputedStyle(body).backgroundImage;
var button = document.querySelector("button");

//Initial colors and h3
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


var colorArray = bgColor;
var rgb = [];
colorArray = colorArray.split(", ");
colorArray.forEach((element) => { rgb.push(element.replace(/[^0-9]/g, "")); });
rgb.splice(0, 1);
color1.value = rgbToHex(Number(rgb[0]), Number(rgb[1]), Number(rgb[2]));
color2.value = rgbToHex(Number(rgb[3]), Number(rgb[4]), Number(rgb[5]));
setGradient();

//Existing code
function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Random Colors
function randomcolors() {
	color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
	setGradient();
}

button.addEventListener("click", randomcolors);
