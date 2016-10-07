$("nav#botonera ul li a").click(function(event) {
  event.preventDefault();
  var href = $(this).attr("href");
  $(href).animatescroll({
    easing: "easeOutBounce",
    scrollSpeed: 2000
  });
});

$.scrollUp({
  scrollText: "",
  easingType: "easeOutBounce",
  scrollSpeed:"2000"
});
