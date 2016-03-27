define('ui/parts/LeftMenu', [
    'jquery'
], function ($) {
    "use strict";

    $(document).on('click', '.left-menu-button', function () {
        if (!$(this).hasClass('active')) {
            $('.left-submenu').slideUp();
            $(this).next().slideToggle();
            $('.left-menu-button').removeClass('active');
            $(this).addClass('active');
        } else {
            $('.left-submenu').slideUp();
            $('.left-menu-button').removeClass('active');
        }
    });

    $(document).on('click', '.left-submenu-button', function () {
        if (!$(this).hasClass('active')) {
            $('.left-submenu-button').removeClass('active');
            $(this).addClass('active');
            $('i.sensor').hide();
            $(this).parent('.sensor').show();
            $('.active').children('.sensor').show();
        }
    });

    $(document).on('click', '#content-merger .merger-separator', function () {
        if (!$(this).hasClass('active')) {
            $('#left-column').hide();
            $('#content-merger').css('margin-left', 0);
            $('#content').css('margin-left', 3);
            $(this).addClass('active');
        } else {
            $('#left-column').show();
            $('#content-merger').css('margin-left', 203);
            $('#content').css('margin-left', 206);
            $(this).removeClass('active');
        }
    });

    $(document).ready(function () {
        $('#left-menu-first').trigger('click');
        $('#left-submenu-first').trigger('click');
    });
});
