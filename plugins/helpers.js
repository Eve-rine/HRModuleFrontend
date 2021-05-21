function createButton(context, func){
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Click ";
    button.onclick = func;
    context.appendChild(button);
}

function showNotification (text, pos, status, persistent) {
	var config = {};
	config.timeout = persistent ? !persistent : 3000;
	if(status) {
		config.status = status;
	}
	if(pos) {
		config.pos = pos;
	}
	UIkit.notification(text, config);
}
export {showNotification,createButton}
