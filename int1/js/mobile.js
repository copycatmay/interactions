console.log("lets see if this remains in your code");
console.log("it will");

// reset
$(function () {
  window.scrollTo(0, 0);
});

$("#start").on("click", function (e) {
  e.preventDefault();
  $(".link").addClass("active");
  $(".event").removeClass("activeLink");

  console.log("start clicked");
  $("html, body").animate(
    {
      scrollLeft: 0,
    },
    1000
  );
});

$(document).on("click", "img", function () {
  $("img").not(this).removeClass("active");
  $(this).toggleClass("active");

  let caption = $(this).data("caption");
  $("#imgCaption").fadeOut(300, function () {
    $(this).text(caption).fadeIn(300);
  });
});
