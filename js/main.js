$(document).ready(function(){
  var date = new Date();
  $(".notification-panel__button-gotit").click(function(){
    $(".notification-panel").slideUp();
  });
  $(".fas.fa-times").click(function(){
    date.setTime(date.getTime() + (10 * 60 * 1000));
    document.cookie = 'Newsletter Panel=Disabled;expires='+date+';path=/';
    $(".newsletter-panel").slideUp();
  });
});
$(window).scroll(function(){
  var sticky = $('.notification-panel'),
      scroll = $(window).scrollTop();

  if(scroll > 0){
    sticky.css({"position": "fixed"});
  }
  else{
    sticky.css({"position": "relative"});
  }

  if(scroll >= ($(document).height() / 3)){
    if (document.cookie && document.cookie.indexOf('Newsletter Panel=Disabled') != -1) {
      $(".newsletter-panel").hide();
    } else {
      $(".newsletter-panel").slideDown();
    }
  }
});