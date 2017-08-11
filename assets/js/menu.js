function showMenu () {
  $(".toggle-menu").addClass('active');
  $(".overlay").show();
}

function hideMenu () {
  $(".toggle-menu").removeClass('active');
  $(".overlay").hide();
}
  
$(document).ready(function(){
  $('.toggle-tab').on('click', function(){
    var isActive = $(this).hasClass('active');
    $('.toggle-tab').removeClass('active');
    if(!isActive){
      $(this).addClass('active');
    }
  });
});

