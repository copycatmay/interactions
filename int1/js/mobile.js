console.log("lets see if this remains in your code");
console.log(` ▄▀▀█▄   ▄▀▀▄ ▀▄  ▄▀▀█▄▄       ▄▀▀█▀▄    ▄▀▀▀█▀▀▄      ▄▀▀▄    ▄▀▀▄  ▄▀▀█▀▄   ▄▀▀▀▀▄    ▄▀▀▀▀▄     
▐ ▄▀ ▀▄ █  █ █ █ █ ▄▀   █     █   █  █  █    █  ▐     █   █    ▐  █ █   █  █ █    █    █    █      
  █▄▄▄█ ▐  █  ▀█ ▐ █    █     ▐   █  ▐  ▐   █         ▐  █        █ ▐   █  ▐ ▐    █    ▐    █      
 ▄▀   █   █   █    █    █         █        █            █   ▄    █      █        █         █       
█   ▄▀  ▄▀   █    ▄▀▄▄▄▄▀      ▄▀▀▀▀▀▄   ▄▀              ▀▄▀ ▀▄ ▄▀   ▄▀▀▀▀▀▄   ▄▀▄▄▄▄▄▄▀ ▄▀▄▄▄▄▄▄▀ 
▐   ▐   █    ▐   █     ▐      █       █ █                      ▀    █       █  █         █         
        ▐        ▐            ▐       ▐ ▐                           ▐       ▐  ▐         ▐         `);

// reset

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

$(".mobileData").scroll(function () {
  let scroll = $(".mobileData").scrollTop();
  $(".mobileTitle").css("top", -scroll / 4.5 + "px");

  console.log("scroll: ", scroll);
});
