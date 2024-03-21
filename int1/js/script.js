console.log("lets see if this remains in your code");
console.log("it will");

// reset
$(window).on("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 100); // Adjust delay as needed
});

$(document).ready(function () {
  // Clone the initial content of #kuan

  let isAppending = false; // Flag to prevent multiple simultaneous append/prepend actions

  $(".info").on("scroll", function () {
    let initialContent = $(this).children().clone();

    let $this = $(this);
    let scrollTop = $this.scrollTop();
    let scrollHeight = $this[0].scrollHeight;
    let innerHeight = $this.innerHeight();

    // Check if the user has scrolled to the bottom of #kuan
    if (scrollTop + innerHeight >= scrollHeight - 100 && !isAppending) {
      isAppending = true;
      $this.append(initialContent.clone());
      isAppending = false;
    }
    // Check if the user has scrolled to the top of #kuan
    else if (scrollTop <= 100 && !isAppending) {
      isAppending = true;
      let clonedContent = initialContent.clone();
      let contentHeightBefore = $this[0].scrollHeight;
      $this.prepend(clonedContent); // Prepend a copy of the initial content
      let contentHeightAfter = $this[0].scrollHeight;
      // Adjust scroll position to maintain view, considering the height of the prepended content
      $this.scrollTop(scrollTop + (contentHeightAfter - contentHeightBefore));
      isAppending = false;
    }
  });
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
    { selector: "#akImg7", initialLeft: 180, parallaxSpeed: 0.01 },
    { selector: "#akImg8", initialLeft: 220, parallaxSpeed: 0.03 },
    { selector: "#akImg9", initialLeft: 320, parallaxSpeed: 0.04 },
    { selector: "#akImg10", initialLeft: 385, parallaxSpeed: 0.05 },
    { selector: "#akImg11", initialLeft: 395, parallaxSpeed: 0.02 },
    { selector: "#akImg12", initialLeft: 420, parallaxSpeed: 0.01 },
    { selector: "#akImg13", initialLeft: 455, parallaxSpeed: 0.03 },
    { selector: "#akImg14", initialLeft: 495, parallaxSpeed: 0.01 },
    { selector: "#akImg15", initialLeft: 500, parallaxSpeed: 0.02 },
    { selector: "#akImg16", initialLeft: 540, parallaxSpeed: 0.01 },
    { selector: "#akImg17", initialLeft: 570, parallaxSpeed: 0.02 },
    { selector: "#akImg18", initialLeft: 610, parallaxSpeed: 0.04 },
    { selector: "#akImg19", initialLeft: 660, parallaxSpeed: 0.05 },
    { selector: "#akImg20", initialLeft: 690, parallaxSpeed: 0.02 },
    { selector: "#akImg21", initialLeft: 720, parallaxSpeed: 0.03 },
    { selector: "#akImg22", initialLeft: 780, parallaxSpeed: 0.01 },
    { selector: "#akImg23", initialLeft: 840, parallaxSpeed: 0.02 },
    { selector: "#akImg24", initialLeft: 855, parallaxSpeed: 0.03 },
    { selector: "#akImg25", initialLeft: 900, parallaxSpeed: 0.02 },
    // Add more configurations here for each image
    // {selector: '#imageId', initialLeft: initialValue, parallaxSpeed: speedValue},
  ];

  // Iterate over each image configuration and apply the parallax effect
  imagesConfig.forEach((img) => {
    let newPos = img.initialLeft - scroll * img.parallaxSpeed;
    $(img.selector).css("left", newPos + "%");
  });
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

$("img").on("click", function () {
  $("img").removeClass("active");
  $(this).addClass("active");
  // Extract data from the clicked image
  // For demonstration, using the image's 'src' attribute as the data
  let caption = $(this).data("caption");

  // Update the #imgCaption paragraph with the extracted data
  $("#imgCaption").fadeOut(300, function () {
    // Once the fadeOut completes, update the text
    $(this).text(caption);

    // Then, fade in the updated caption
    $(this).fadeIn(300);
  });
});

$(".debug button").on("click", function () {
  let scroll = $(window).scrollLeft();
  $(this).text("scroll distance: " + scroll);

  $("#antherDist").text($(".akL").css("margin-left"));
  $("#takahashiDist").text($(".tkL").css("margin-left"));
  $("#eRoonDist").text($(".erL").css("margin-left"));
  $("#sebastianDist").text($(".saL").css("margin-left"));
});

$(".saL").on("click", function () {
  $(".event").removeClass("activeLink");
  $("#sebastian_aubin").addClass("activeLink");
  $(".link").addClass("active");
  $(this).removeClass("active");

  $("html, body").animate(
    {
      scrollLeft: 9136,
    },
    2500
  );
});

$(".erL").on("click", function () {
  $(".event").removeClass("activeLink");
  $("#e_roon_kang").addClass("activeLink");
  $(".link").addClass("active");
  $(this).removeClass("active");

  $("html, body").animate(
    {
      scrollLeft: 5561,
    },
    2500
  );
});

$(".tkL").on("click", function () {
  $(".event").removeClass("activeLink");
  $("#takahashi_kuan").addClass("activeLink");
  $(".link").addClass("active");
  $(this).removeClass("active");

  $("html, body").animate(
    {
      scrollLeft: 2801,
    },
    2500
  );
});

$(".akL").on("click", function () {
  $(".event").removeClass("activeLink");
  $("#anther_kiley").addClass("activeLink");
  $(".link").addClass("active");
  $(this).removeClass("active");

  $("html, body").animate(
    {
      scrollLeft: 841,
    },
    2500
  );
});

function setActive() {
  $(this).addClass("active");
  $();
}

// iterated upon https://stackoverflow.com/questions/10072216/jquery-infinite-scroll-with-div-not-scrollbar-of-body
