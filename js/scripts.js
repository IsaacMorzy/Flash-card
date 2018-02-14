$(document).ready(function(){
  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-show").toggle();
  });
});
