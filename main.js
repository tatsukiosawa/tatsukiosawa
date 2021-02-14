$('.img-muni').hide();
$('.img-muni').fadeIn(3000);

$(function() {
  $('a[href^="#"]').click(function() {
    const speed = 600;
    const href= $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


