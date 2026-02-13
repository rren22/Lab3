// This function runs after GeoJSON data has been loaded
function debugCallback(data){
	//this part select the HTML element with the id="mydiv" and insert text at the end
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br> ' + JSON.stringify(data))
};

//This function sends a request to get the GeoJSON file
//Wait for the reponse and then converts the response into JSON format
//Then parsed the data to debugCallback() when is is ready
function debugAjax(){
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			debugCallback(data);
		})

	//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
};

//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))

//calls the functions
debugAjax()