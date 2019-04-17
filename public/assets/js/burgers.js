$(function() {
  $(".create-form").on("submit", function(event) {
      event.preventDefault();

      //When user submits order
      var YourNewBurger = {
      YourBurger: $("#burgerOrder").val().trim(),
      devoured: 0
      };

      //Use ajax to POST a burger
      $.ajax("/api/burgers", {
      type: "POST",
      data: YourNewBurger
      }).then(
      function() {
          console.log("created Your new Burger");
          // Reload the page
          location.reload();
      }
      );
  });

  //onclick throw away
  $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      //Use ajax to Delete burger
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("Your Burger is gone", id);
          //Reload the page
          location.reload();
        }
      );
    });

  //onclick devour burger
  $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: "true"
      };
  
      //Use ajax to do PUT method
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          //Reload the page
          location.reload();
        }
      );
    });   
});
