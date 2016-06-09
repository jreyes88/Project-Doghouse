$("document").ready(function(){
	console.log("JS and jQuery is linked and working");// Confirm JS

	/***  GLOBAL VARIABLES  ***/
		// Declare vars here

	/***  FUNCTIONS  ***/
		// Build our functions here

	/***  EVENTS  ***/
		// Bind our functions to events


	// Google Maps API

	function initMap() {
		var mapDiv = document.getElementById('map');
		var map = new google.maps.Map(mapDiv, {
	    	center: {lat: 44.540, lng: -78.546},
	    	zoom: 8
	    });
	};

	initMap();

});// End document.ready