// routary.js
// Author: R. Barisic
// Library used for simple javascript routing

var routary = {
	paths: [],
	pathTo: function(path) {
		this.paths.push(path + '.html')
	},

	createHeader: function() {
		var routes = routary.paths;
		var container = document.createElement('div');

		// debugger

		container.style.whitespace = 'no-wrap';
		container.style.marginTop = '1em';

		for(i in routes) {
			var link = document.createElement('a');
			link.text = routes[i];
			link.href = routes[i];

			// styling
			link.style.padding = '0.5em';
			link.style.background = '#eee';
			
			container.appendChild(link);
			console.log(container);
		}

		document.body.appendChild(container);
	}
};

routary.pathTo('canvas');
routary.pathTo('table');
routary.pathTo('visual');
routary.pathTo('scroll_listener')

document.addEventListener("DOMContentLoaded", routary.createHeader, false);