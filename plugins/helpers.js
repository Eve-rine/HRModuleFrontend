
import styles from "../assets/button.css";

function createButton (text, func, color){
// 1. Create the button
	var button = document.createElement("button");
	// <fa :icon="['fas', 'eye']" class="md-color-white" />
	// button.innerHTML = text;
	// button.innerHTML = '<i class = "fa fa-spinner fa-spin"></i> Please wait...';
	button.style.width = '25px'; // setting the width to 200px
	button.style.height = '25px'; // setting the height to 200px
	button.style.background = 'teal'; // setting the background color to teal
	button.style.color = 'white'; // setting the color to white
	button.style.fontSize = '20px'; // setting the font size to 20px
	button.innerHTML = '<i mdi mdi-checkbox-marked-outline"></i>';
	// button.class=styles.removeBttnClass;
	button.style.backgroundColor = color;
	button.style.color = 'blue';
	// button.class='<i mdi mdi-checkbox-marked-outline"></i> Please wait...Please wait... '
	// 2. Append somewhere
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(button);

	// // 3. Add event handler
	button.onclick = func;
}
export {createButton}
