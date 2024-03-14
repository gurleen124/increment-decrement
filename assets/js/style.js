$(document).ready(function(){
    $("#addToList").click(function(){
        $("p").append($("#input-value").val() + "<br>");
    });
  });