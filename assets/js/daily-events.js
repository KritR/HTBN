function showDiv() {
  var i, divcontent;
  divcontent = document.getElementsByClassName("divcontent");
  x = document.getElementById("sel1").value;

  for (i = 0; i < divcontent.length; i++) {
      divcontent[i].style.display = "none";
  }

  document.getElementById(x).style.display = "block";
  
}   
