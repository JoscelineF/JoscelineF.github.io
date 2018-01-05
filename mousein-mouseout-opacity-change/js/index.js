window.onload = function(){
  var imgli = document.getElementsByTagName("li");
  var i=0;
  var len = imgli.length; 
  while(i<len){
    imgli[i].onmouseover = function(){
      this.className = "current";
    };
    imgli[i].onmouseout = function(){
      this.className = "";
    };
    i++;
  }
}