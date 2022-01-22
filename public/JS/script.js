

// Script pour la bar de navigation

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('#bandeHaut').css('display', 'none');
        $('#navBar').css('position', 'fixed');
        $('#navBar').css('top', '0');
        $('#banner').css('margin-top', '170px');
        $('#logoNavMobile').css('top', '20px');
        $('#bannerMob').css('margin-top', '170px');
        $('#section').css('margin-top', '160px');



    } else {
        $('#bandeHaut').css('display', 'block');
        $('#navBar').css('position', 'static');
        $('#navBar').css('top', '0');
        $('#banner').css('margin-top', '0px');

        $('#logoNavMobile').css('top', '60px');
        $('#bannerMob').css('margin-top', '0px');
        $('#section').css('margin-top', '0px');

    }
})