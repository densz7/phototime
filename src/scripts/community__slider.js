(function() {
     $(document).ready(function() {
        $(".community__slider .slider__slides").slick({
            prevArrow: '<a class="slider__prev slider__prev--community"></a>',
            nextArrow: '<a class="slider__next slider__next--community"></a>',
            appendArrows: $(".community__slider .slider__arrows"),
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1075,
                    settings: {
                        slidesToScroll: 1,
                        variableWidth: true
                    }
                },

                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }); 
})();