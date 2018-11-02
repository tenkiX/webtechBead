function initManufacturers() {
  		refreshManufacturers();
		$('#manufacturerForm').submit(function(e){
		    e.preventDefault();
		    $.ajax({
		        url:'/addManufacturers',
		        type:'post',
		        data:$('#manufacturerForm').serialize(),
		        success:function(){
		        	$("input[type=text], textarea").val("");
		        	alert("Gyártó hozzáadva!");
                    refreshManufacturers();
		        },
                error: function(e) {
                    alert("Hiba! Már létezik a gyártó?");
                }
		    });
		});
}


function refreshManufacturers() {
	return $.get('/manufacturers', function(manufacturers) {
		$("#manufacturerContainer").empty();
		for(var manufacturer of manufacturers) {
            $("#manufacturerContainer").append("<p>" + manufacturer.name + "  " + manufacturer.country + "  " + manufacturer.founded +  "</p>");
		}
	});
}
