
function createButton (buttonText, onclickfunction, color){
	var button = document.createElement("button");
	button.style.width = '200px';
	button.style.height = '40px';
	button.style.color = 'white';
	button.style.fontSize = '20px';
	button.innerHTML = buttonText;
	button.style.backgroundColor = color;
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(button);
	button.onclick = onclickfunction;
}
export {createButton}
