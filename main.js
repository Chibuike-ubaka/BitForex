$(document).ready(function() {
    var menuVisible = false;
  
    $('.navbar-toggler').click(function() {
      if (menuVisible) {
        $('#navbarSupportedContent').removeClass('collapse');
        menuVisible = false;
      } else {
        $('#navbarSupportedContent').addClass('collapse');
        menuVisible = true;
      }
    });
  });
  
  
   