$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var formName = $("#name").val();
    var formAddress = $("#address").val();

    //$("div.receipt").toggle();
    $("div#contactList").append("<button class='btn btn-primary functionClick'>" + formName + "</button>");
     $("#ContactCard").toggle();
  });

  $(".close").click(function() {
    $(".card").hide();
  });
});
