console.log("lets see if this remains in your code");
console.log(` ▄▀▀█▄   ▄▀▀▄ ▀▄  ▄▀▀█▄▄       ▄▀▀█▀▄    ▄▀▀▀█▀▀▄      ▄▀▀▄    ▄▀▀▄  ▄▀▀█▀▄   ▄▀▀▀▀▄    ▄▀▀▀▀▄     
▐ ▄▀ ▀▄ █  █ █ █ █ ▄▀   █     █   █  █  █    █  ▐     █   █    ▐  █ █   █  █ █    █    █    █      
  █▄▄▄█ ▐  █  ▀█ ▐ █    █     ▐   █  ▐  ▐   █         ▐  █        █ ▐   █  ▐ ▐    █    ▐    █      
 ▄▀   █   █   █    █    █         █        █            █   ▄    █      █        █         █       
█   ▄▀  ▄▀   █    ▄▀▄▄▄▄▀      ▄▀▀▀▀▀▄   ▄▀              ▀▄▀ ▀▄ ▄▀   ▄▀▀▀▀▀▄   ▄▀▄▄▄▄▄▄▀ ▄▀▄▄▄▄▄▄▀ 
▐   ▐   █    ▐   █     ▐      █       █ █                      ▀    █       █  █         █         
        ▐        ▐            ▐       ▐ ▐                           ▐       ▐  ▐         ▐         `);

// reset
$(function () {
  window.scrollTo(0, 0);
});

// increase letterspacing based on scroll distance
$(window).scroll(function () {
  let scroll = $(window).scrollLeft();

  let newMargin = scroll; // Example calculation, adjust as needed
  $(".akL").css("margin-left", newMargin * 0.0067 + "vw");
  $(".tkL").css("margin-left", newMargin * 0.0054 + "vw");
  $(".erL").css("margin-left", newMargin * 0.0032 + "vw");
  $(".saL").css("margin-left", newMargin * 0.0014 + "vw");

  // Array of objects for each image configuration
  const imagesConfig = [
    { selector: "#akImg1", initialLeft: 50, parallaxSpeed: 0.01 },
    { selector: "#akImg2", initialLeft: 10, parallaxSpeed: 0.02 },
    { selector: "#akImg3", initialLeft: 130, parallaxSpeed: 0.03 },
    { selector: "#akImg4", initialLeft: 90, parallaxSpeed: 0.04 },
    { selector: "#akImg5", initialLeft: 70, parallaxSpeed: 0.05 },
    { selector: "#akImg6", initialLeft: 150, parallaxSpeed: 0.02 },
    { selector: "#tkImg7", initialLeft: 180, parallaxSpeed: 0.01 },
    { selector: "#tkImg8", initialLeft: 220, parallaxSpeed: 0.03 },
    { selector: "#tkImg9", initialLeft: 320, parallaxSpeed: 0.04 },
    { selector: "#tkImg10", initialLeft: 385, parallaxSpeed: 0.05 },
    { selector: "#tkImg11", initialLeft: 395, parallaxSpeed: 0.02 },
    { selector: "#erImg12", initialLeft: 420, parallaxSpeed: 0.01 },
    { selector: "#erImg13", initialLeft: 455, parallaxSpeed: 0.03 },
    { selector: "#erImg14", initialLeft: 495, parallaxSpeed: 0.01 },
    { selector: "#erImg15", initialLeft: 500, parallaxSpeed: 0.02 },
    { selector: "#erImg16", initialLeft: 540, parallaxSpeed: 0.01 },
    { selector: "#erImg17", initialLeft: 570, parallaxSpeed: 0.02 },
    { selector: "#erImg18", initialLeft: 610, parallaxSpeed: 0.04 },
    { selector: "#erImg19", initialLeft: 660, parallaxSpeed: 0.05 },
    { selector: "#saImg20", initialLeft: 690, parallaxSpeed: 0.02 },
    { selector: "#saImg21", initialLeft: 720, parallaxSpeed: 0.03 },
    { selector: "#saImg22", initialLeft: 780, parallaxSpeed: 0.01 },
    { selector: "#saImg23", initialLeft: 840, parallaxSpeed: 0.02 },
    { selector: "#saImg24", initialLeft: 855, parallaxSpeed: 0.03 },
    { selector: "#saImg25", initialLeft: 900, parallaxSpeed: 0.02 },
  ];

  // Iterate over each image configuration and apply the parallax effect
  imagesConfig.forEach((img) => {
    if (!$(img.selector).hasClass("active")) {
      // Check if the image does not have the 'active' class
      let newPos = img.initialLeft - scroll * img.parallaxSpeed;
      $(img.selector).css("left", newPos + "%");
    }
  });

  // v hides non-focused links
  let scrollPosition = $(window).scrollLeft();
  let $activeLink = $(".activeLink");

  if ($activeLink.length === 0) {
    return;
  }

  let activeLinkPosition = $activeLink.offset().left - 200; // adjusted since it calcs. to the very right of the div
  let distance = Math.abs(scrollPosition - activeLinkPosition);
  let withinRange = distance <= 500;

  let $otherLinks = $(".link").filter(".active");

  if (withinRange) {
    $otherLinks.css("opacity", 0); //hide
  } else {
    $otherLinks.css("opacity", 0.2); //show
  }
});

// return to start ----------------------------------------------
$("#start").on("click", function (e) {
  e.preventDefault();
  $(".link").addClass("active").css("opacity", 0.2);
  $(".event").removeClass("activeLink");

  console.log("start clicked");
  $("html, body").animate(
    {
      scrollLeft: 0,
    },
    1000
  );
});

// img click func. ----------------------------------------------
$(document).on("click", "img", function () {
  $("img").not(this).removeClass("active");
  $(this).toggleClass("active");

  $(window).scroll();
  let caption = $(this).data("caption");
  $("#imgCaption").fadeOut(300, function () {
    $(this).text(caption).fadeIn(300);
  });
});

// scroll for links
$(".saL").on("click", function () {
  $(".event").removeClass("activeLink");
  $("#sebastian_aubin").addClass("activeLink");
  $(".link").addClass("active");
  $(this).removeClass("active");
  $(this).css("opacity", 1);

  $("html, body").animate(
    {
      scrollLeft: $("#sebastian_aubin").offset().left - 350,
    },
    2500
  );
});

// eroon kang
$(".erL").on("click", function () {
  $(".event").removeClass("activeLink");
  $("#e_roon_kang").addClass("activeLink");
  $(".link").addClass("active");
  $(this).removeClass("active");
  $(this).css("opacity", 1);

  $("html, body").animate(
    {
      scrollLeft: $("#e_roon_kang").offset().left - 425,
    },
    2500
  );
});

// takahashi kuan
$(".tkL").on("click", function () {
  $(".event").removeClass("activeLink");
  $("#takahashi_kuan").addClass("activeLink");
  $(".link").addClass("active");
  $(this).removeClass("active");
  $(this).css("opacity", 1);

  $("html, body").animate(
    {
      scrollLeft: $("#takahashi_kuan").offset().left - 385,
    },
    2500
  );
});

// anther kiley
$(".akL").on("click", function () {
  $(".event").removeClass("activeLink");
  $("#anther_kiley").addClass("activeLink");
  $(".link").addClass("active");
  $(this).removeClass("active");
  $(this).css("opacity", 1);

  $("html, body").animate(
    {
      scrollLeft: $("#anther_kiley").offset().left - 250,
    },
    2500
  );
});

function setActive() {
  $(this).addClass("active");
  $();
}

// toggle image selection. ----------------------------------------------
// $(document).on("mousedown", function () {
//   $(".event").each(function () {
//     if ($(this).hasClass("activeLink")) {
//       let currentId = $(this).attr("id");
//       if (currentId === "anther_kiley") {
//         console.log("Anther Kiley is active");
//         $(".anther_kileyImg").addClass("active");
//       } else if (currentId === "e_roon_kang") {
//         console.log("E Roon Kang is active");
//       } else if (currentId === "takahashi_kuan") {
//         console.log("Takahashi Kuan is active");
//       } else if (currentId === "sebastian_aubin") {
//         console.log("Sebastian Aubin is active");
//       }
//     }
//   });
// });

// iterated upon https://stackoverflow.com/questions/10072216/jquery-infinite-scroll-with-div-not-scrollbar-of-body
// With help from GPT-4
