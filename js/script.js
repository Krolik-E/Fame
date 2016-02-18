var buttons = window.document.getElementsByTagName('button');

function showAction() {
	debugger;
	var type = this.getAttribute('data-action');
	if (type === 'color') {
		this.classList.toggle('active');
	} else if (type === 'fill') {
		var children = this.children;
		for (var i = 0; i < children.length; i++){
			children[i].classList.toggle('under');
		}
	}
};

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', showAction);
};


