$(document).ready(function(){
    var menu = $(".navbar-fixed");

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > menu.scrollTop()) {
            menu.addClass('menu-fixed');
        } else {
            menu.removeClass('menu-fixed');
        }
    });
});
