document.addEventListener("DOMContentLoaded", function(event) {
   var thumbnailElement = document.getElementById("smart_thumbnail");
   var thumbnailRobot = document.getElementById("smart_Robot");
   
   thumbnailElement.addEventListener("click", function(){
  if (thumbnailElement.className == "small")
      thumbnailElement.className= "";
  else(thumbnailElement.className = "small");
   });
   thumbnailRobot.addEventListener("click", function(){
  if (thumbnailRobot.className == "small")
      thumbnailRobot.className= "";
  else(thumbnailRobot.className = "small");
   });
});