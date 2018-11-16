jQuery(document).ready(function() {
        $("#content").load("main.html", function(){
            initMain();
        });
        $("#mainBtn").click(function() {
            $("#content").load("main.html", function(){
                initMain();
            });
        });
        $("#carsBtn").click(function() {
            $("#content").load("cars.html", function(){
                initCars();            
            });
        });
        $("#manufacturersBtn").click(function() {
            $("#content").load("manufacturers.html", function(){
                initManufacturers();            
            });
        });
});

