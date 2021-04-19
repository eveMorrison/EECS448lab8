function changeAttributes()
{
 
  document.getElementById("border").style.border = "solid"
  var redBorder = document.getElementById("redBorder");
  var greenBorder = document.getElementById("greenBorder");
  var blueBorder = document.getElementById("blueBorder");
  var border_width = document.getElementById("border_w");

  var temp_width = border_width.value+"px";
  document.getElementById("border").style.borderWidth = temp_width;

  var temp_border_color = "rgb("+redBorder.value+","+greenBorder.value+","+blueBorder.value+")";
  document.getElementById("border").style.borderColor = temp_border_color;
  var background_red = document.getElementById("background_red");
  var background_green = document.getElementById("background_green");
  var background_blue = document.getElementById("background_blue");

  var temp_backgroung_color = "rgb("+background_red.value+","+background_green.value+","+background_blue.value+")";
  document.getElementById("border").style.backgroundColor = temp_backgroung_color;
}