$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var formName = $("#name").val();
    var formAddress = $("#address").val();

    $("div#contactList").append("<button id='"+formName+"' class='btn btn-primary functionClick'>" + formName + "</button>");

    $("div#contactCardSpace").append("<div class='contact' id='"+formName+"'><h2>Contact:</h2><p>Name: " + formName + "</p><p>Address: " + formAddress + "</p></div>");

    $("button#"+formName).click(function(event) {
      $("div#"+formName).toggle();

    });

  });

});
