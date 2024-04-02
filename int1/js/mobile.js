console.log("lets see if this remains in your code");
console.log("it will");

// reset
$(function () {
  window.scrollTo(0, 0);
});

$(document).on("click", "img", function () {
  $("img").not(this).removeClass("activeMobile");
  $(this).toggleClass("activeMobile");

  let caption = $(this).data("caption");
  $("#imgCaption").fadeOut(300, function () {
    $(this).text(caption).fadeIn(300);
  });
});

let currentSection = null; // Track the current section
