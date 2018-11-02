window.onload = function() {
  	jQuery(document).ready(function() {
        
        $("#content").load("main.html");

        $("#mainButton").click(function() {
            $("#content").load("main.html");
        });

        $("#carButton").click(function() {
            $("#content").load("car.html", function(){
                initCars();            
            });
        });

        $("#manufacturerButton").click(function() {
            $("#content").load("manufacturer.html", function(){
                initManufacturers();            
            });
        });

	});
};
