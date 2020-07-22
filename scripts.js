"strict mode"
$(document).ready(function () {

    const slider = $(function () {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            adaptiveHeight: true,
            randomStart: true,
            auto: true
        });
    });

    slider();
});