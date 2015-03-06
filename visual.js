function Visual(element) {
	this.object = document.getElementById(element);
	this.show = function() {
		object.style.display = 'block';
	}
	this.hide = function() {
		object.style.display = 'none';
	}
}

document.addEventListener("DOMContentLoaded", function(event) { 
	viz = new Visual('container');
});