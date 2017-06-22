$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').delay(1500).fadeOut('slow'); // will first fade out the loading animation 
  $('#preloader').delay(2000).slideToggle('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});

  
  


  $("#front-slide").css("height",$(window).height()-200);
  $(".img_bg").css("height",$(window).height());
  $(".img_sm").css("width",$(window).width());
})