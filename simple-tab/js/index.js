window.onload = function(){
  var tabs = document.getElementsByTagName("li");
  var contents = document.getElementById("contents").getElementsByTagName("div");
  //console.log(contents);
  for(let i=0; i<tabs.length; i++){
    tabs[i].onmouseover = function(){
      for(let j=0;j<contents.length;j++){
        contents[j].style.display = "none";           contents[i].style.display= "block";         }  
    };
  }
};