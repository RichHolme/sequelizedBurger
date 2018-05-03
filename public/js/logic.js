$( document ).ready(function() {

$(function() {
	$(".devourBtn").on('click', function(event){
		var id = $(this).attr("id");
		// console.log(id);
		var devouredStatus = {
			status: "devoured",
      		devoured: true
    	};

		$.ajax("/api/burgers/" + id, {
		    type: "PUT",
		    data: devouredStatus
		}).then(
		    function() {
		    // console.log("changed sleep to", newSleep);
		    // Reload the page to get the updated list
		    location.reload();
		    }
		);
	})
});

$(document).on("click","#submitBtn", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // console.log("working");
    var newBurger = {
      name: $("#name").val().trim(),
      // sleepy: $("[name=sleepy]:checked").val().trim()
    };
    // console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});