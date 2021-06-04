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

function createButton(context,func){
	var button =document.createElement("input");
	button.type="button";
	button.value="click me"
	context.appendChild(button)
}
function functi(){
	createButton(document.body,functi)
}
createButton(document.body,functi)
export {showNotification,createButton}
