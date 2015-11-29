$(document).ready(function() {

  var targetButtonsReset = function(){
    $("a").removeAttr("target");
    $("#theOtherButton").css("color", "#949494");
    $("#thatButton").css("color", "#949494");
    $("#thisButton").css("color", "#949494");
  }

  $("#theOtherButton").on("click", function(event){
    event.preventDefault();
    targetButtonsReset();
    $("a").attr("target", "_blank");
    $(this).css("color", "white");
  })

  $("#thisButton").on("click", function(event){
    event.preventDefault();
    targetButtonsReset();
    $(this).css("color", "white");
  })

  $("#thatButton").on("click", function(event){
    event.preventDefault();
    targetButtonsReset();
    $(this).css("color", "white");
  })





});
