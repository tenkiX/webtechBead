function initCars() {
  		refreshCars();
		$('#carForm').submit(function(e){
		    e.preventDefault();
		    $.ajax({
		        url:'/addCar',
		        type:'post',
		        data:$('#carForm').serialize(),
		        success:function(){
		        	$("input[type=text], textarea").val("");
		        	$("input[type=number], textarea").val("");
		        	refreshCars();
		        },
                error: function(e) {
                    alert("Már van ilyen autó!");
                }
		    });
		});

    $("#carHeading").animate({
        opacity: '1',
        height: '20px',
    });

}



function refreshCars() {
	
	$.get('/manufacturerNames', function(names) {
        $("#manufacturerSelector").empty();
		for(var man of names) {
            $('#manufacturerSelector').append('<option>' + man + "</option>");
		}
	});

	$.get('/cars', function(cars) {
		$("#carContainer").empty();
        $("#carContainer").append("<tr><th>Típus</th><th>Fogyasztás</th><th>Szín</th><th>Gyártó</th><th>Gyártási év</th><th>Darab</th><th>Lóerő</th></tr>");
		for(var car of cars) {
			$("#carContainer").append("<tr class='bordered-row'><td>" + car.name + "</td><td>" + car.consumption + "</td><td>" + car.color + "</td><td>" +car.manufacturer + "</td><td>" + car.year + "</td><td>" + car.available + "</td><td>" + car.horsepower + "</td></tr>");
		}
        $("#carContainer").hide();
        $("#carContainer").fadeIn("slow");
	});

}

