var Table = function() {
	this.generateTable = function(rows,columns) {
		alert(rows)
		alert(columns)
	}
};

function initialize() {
	$ = new Table();
	table = document.getElementById('table-field');
}