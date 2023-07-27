$(window).scroll(function () {
  if ($(this).scrollTop() > 700) {
    $('#wrap').addClass('shadow');
    $('#wrap').removeClass('gradient-nav');
    $('#wrap').addClass('no-gradient');
  } else {
    $('#wrap').removeClass('shadow');
    $('#wrap').addClass('gradient-nav');
    $('#wrap').removeClass('no-gradient');
  }
});