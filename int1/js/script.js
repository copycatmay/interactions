console.log("lets see if this remains in your code");
console.log("it will");

// increase letterspacing based on scroll distance
$(window).scroll(function () {
  let scroll = $(window).scrollLeft();

  console.log(scroll);

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
  console.log("clicked");
  $("html, body").animate(
    {
      scrollLeft: 0,
    },
    1000
  );
});
