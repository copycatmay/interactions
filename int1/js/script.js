$(".student").click(function(){
    $(".student").removeClass("activeStudent");
    $(this).addClass("activeStudent");

    let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    $('body').css('background-color', randomColor);


    $(".secondHand").css("background", randomColor);

});

$(".circle").click(function(){
    $(this).toggleClass("active");
});


$(window).scroll(function(){
    let fromTop = $(window).scrollTop();

    console.log(fromTop);
    $(".secondHand").css("transform", "rotate(" + fromTop/10 + "deg)");

    $(".secondHand").css("width", 250 + fromTop/4 + "px");


});


$(".student").hover(
    function() {
        if (!$(this).hasClass("hoverStudent")) {
            let name = $(this).text();
            let interaction = $(this).attr("data-inter");
            let newName = name + " - " + interaction;
        
            $(this)
            .data("originalName", name) 
            .text(newName)
            .addClass("hoverStudent");
        }
    },
    function() {
        if ($(this).hasClass("hoverStudent")) {
            let originalName = $(this).data("originalName");
            $(this)
            .text(originalName)
            .removeClass("hoverStudent");
        }
    }
);

