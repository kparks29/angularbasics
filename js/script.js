var tog = 'O';

function myController($scope) {
	$scope.ar = ['T','I','C','T','A','C','T','O','E'];
	$scope.toggler = function(i, value) {
		var cell = document.getElementById('cell' + i);
		if (cell.innerHTML == value || cell.innerHTML == "") {
			tog = (tog == 'X' ? 'O' : 'X');
			cell.innerHTML = tog;
		}
	};

}

