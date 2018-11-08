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
		for(var car of cars) {
			$("#carContainer").append("<p>" + car.name + "   " + car.consumption + "   " + car.color + "  " +car.manufacturer + "  " + car.year + "  " + car.available + "   " + car.horsepower + "</p>");
		}
	});

}

