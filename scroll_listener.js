function dynamicBar() {
	var scrollHeader = document.getElementById('dynamic-header');
	var scrollFrame = document.getElementById('dynamic-frame');

	if(scrollY > scrollHeader.offsetHeight) {
		if(scrollHeader.style.position != 'fixed') {
			scrollHeader.style.position = 'fixed';
			scrollHeader.style.top = '0';
			document.body.style.marginTop = '40';
		}
	}
	else {
		scrollHeader.style.position = '';
	}
}

function switchState(oldState,newState) {
	var currentObject = oldState;
	var parentObject = currentObject.parentElement
	var fixe = document.getElementById('dynamic-frame');
	document.body.removeChild(oldState);
	document.body.insertBefore(newState,fixe);
	return true
}

document.addEventListener("scroll",dynamicBar,true)