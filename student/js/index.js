window.onload = function() {
  	jQuery(document).ready(function() {
        
        $("#content").load("main.html", function(){
            initMain();
        });

        $("#mainButton").click(function() {
            $("#content").load("main.html", function(){
                initMain();
            });
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
