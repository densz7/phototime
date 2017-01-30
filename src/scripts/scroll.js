(function() {
    $('.nav__link').on('click', function(e){
        e.preventDefault();
        if ($($(this).attr('href')))
            {
                $('html,body').animate({
                    scrollTop: $($(this).attr('href')).offset().top
            }, 500);
            } else {
                return false;
            }  
    });

    $('.mobile-nav__link').on('click', function(e){
        e.preventDefault();
        if ($($(this).attr('href')))
            {
                $('html,body').animate({
                    scrollTop: $($(this).attr('href')).offset().top
            }, 500);

            $('.banner__mobile-nav').removeClass('banner__mobile-nav--show');
            $(".mobile-menu-icon__lines").removeClass("mobile-menu-icon__lines--close");
            } else {
                return false;
            }  
    });
})();