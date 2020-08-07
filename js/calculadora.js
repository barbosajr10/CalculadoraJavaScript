$(document).ready(function() {

var display = document.getElementById('txtResultado');

  $(":button").click(function() {
    if ($(this).attr("value") == "=") {
      calcula();
    }else {
      display.value += $(this).attr("value");
    }
   });

   function calcula(){
     var calculo = display.value; // 2+3
     display.value = eval(calculo); // 5
   }

});
