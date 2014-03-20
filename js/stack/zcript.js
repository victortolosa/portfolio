$(".towork, .more").on("click", function(){
$('html, body').animate({
    scrollTop: $(".work").offset().top
 }, 400);
});

$(".toabout").on("click", function(){
$('html, body').animate({
    scrollTop: $(".about").offset().top
 }, 400);
});

$(".tocontact").on("click", function(){
$('html, body').animate({
    scrollTop: $(".contact").offset().top
 }, 400);
});

