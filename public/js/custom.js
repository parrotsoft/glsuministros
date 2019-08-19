/*
 Template Name: busimaxx
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});
$(document).ready(function () {
    $('.tv-slider-one .owl-carousel').owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        transitionStyle: "fade",
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: false,
        autoplaySpeed: 6000,
        navSpeed: 3000,
        singleItem: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
});