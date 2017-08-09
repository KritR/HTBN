function showMenu () {
  var x = document.getElementById("toggle-menu");
  var y = document.getElementById("overlay");
  x.style.width = '330px';
  y.style.display = 'block';
}

function hideMenu () {
  var x = document.getElementById("toggle-menu");
  var y = document.getElementById("overlay");
  x.style.width = '0px';
  y.style.display = 'none';
}
  
$(document).ready(function(){
  /*$('.menu a').on('click', function({
    $('.menu a').removeClass('active');
    $(this).addClass('active');
  });*/
  $("#toggle-information-tab").click(function(){
    $("#toggle-sub-tab-one").toggle();
  });
  
  $("#toggle-religious-tab").click(function(){
    $("#toggle-sub-tab-two").toggle();
  });
});

