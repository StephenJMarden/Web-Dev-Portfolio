var toggleSpeed = 500;

$(".project-container").on("mouseenter", function() {
    $(".project-overlay", this).fadeToggle(100);
})
$(".project-container").on("mouseleave", function() {
    $(".project-overlay", this).fadeToggle(0);
})

$("#navigation-hamburger").on("click", function(event) {
    $("#navigation-hamburger").fadeToggle(toggleSpeed);
    $("#navigation-menu").fadeToggle(0).animate({right: "1em"});
})
$("#navigation-close").on("click", function(event) {
    $("#navigation-menu").animate({right: "-100vw"}).fadeToggle(0);
    $("#navigation-hamburger").fadeToggle(toggleSpeed);
})
$(".ham-link").on("click", function(event) {
    event.preventDefault();
    var linkTarget = $(this).attr("href");
    scrollToDiv(linkTarget);

    $("#navigation-menu").animate({right: "-100vw"}).fadeToggle(0);
    $("#navigation-hamburger").fadeToggle(toggleSpeed);
})

$("#cta-button > a").on("click", function(event) {
    event.preventDefault();
    var linkTarget = $(this).attr("href");
    scrollToDiv(linkTarget);
})

$("#see-work").on("click", function(event) {
    scrollToDiv("#about-container");
})

function scrollToDiv(div) {
    $("html, body, #page-container").animate({
        scrollTop: '+=' + $(div).offset().top
    }, 1000);
}