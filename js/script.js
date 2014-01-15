function myController($scope) {
	$scope.cats = [
		{text: "Pickle", done:false},
		{text: "Ben", done:false},
		{text: "Ethel", done:false},
		{text: "Lil Bub", done:false},
		{text: "Grumpy Cat", done:false}
	];
}




/*
<div>
		<ul x-ng-controller="myController">
			<h1 x-ng-bind="catName"></h1>
			{{catName}}<br />
			{{catName}}
			<li x-ng-repeat="cat in cats">
				<input type="checkbox" x-ng-model="cat.done" />
				<span class="done-{{cat.done}}">{{cat.text}}</span>
			</li>
		</ul>
		<input type="text" x-ng-model="catName" />
		<input type="text" x-ng-model="catName2" />
	</div>

	<div>
		<select x-ng-model="catName">
			<option>One</option>
			<option>Two</option>
			<option>Three</option>
			<option>true</option>
			<option>false</option>
		</select>
		<input type="checkbox" x-ng-checked="catName == 'cat'">
	</div>
	*/