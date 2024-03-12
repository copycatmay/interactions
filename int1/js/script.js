console.log("lets see if this remains in your code");
console.log("it will");

// increase letterspacing based on scroll distance
$(window).scroll(function () {
  let scroll = $(window).scrollLeft();
  let letterSpacing = scroll / 50;

  console.log(scroll);
  $("#mainTitle h1").css("letter-spacing", letterSpacing + "px");
  // $("#subTitle").css("letter-spacing", letterSpacing/4 + "px");

  let newMargin = scroll; // Example calculation, adjust as needed
  $(".akL").css("margin-left", newMargin * 0.0024 + "vw");
  $(".tkL").css("margin-left", newMargin * 0.002 + "vw");
  $(".erL").css("margin-left", newMargin * 0.0025 + "vw");
  $(".saL").css("margin-left", newMargin * 0.001 + "vw");
});
