function display(value) {
	alert(value);
	
	//CHanges the text of the btnOne
	document.getElementById("btnOne").textContent = "One Clicked!";

	//add an event to btnTwo
	document.getElementById("btnTwo").addEventListener('click', updateTwo);
	document.getElementById('btnTwo').textContent = "Now Click this one";
}

function updateTwo() {
	document.getElementById('btnTwo').textContent = "Two Clicked";
}