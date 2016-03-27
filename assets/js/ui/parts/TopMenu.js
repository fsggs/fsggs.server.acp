define('ui/parts/TopMenu', [
    'jquery'
], function ($) {
    "use strict";

    var top_menu_open = false;

    var SystemWindow = function (anchor) {
        switch (anchor) {
            case 'about':
                About.toggle();
                break;
            case 'exit':
                window.open('', '_self').close();
                break;
        }
    };

    var About = {
        state: false,
        listener: function (e) {
            About.hide();
        },

        show: function () {
            $('#about').show();
            $('#background-body').show();
            $(document).on('click', '#background-body', this.listener);
            return this.state = true;
        },

        hide: function () {
            $('#about').hide();
            $('#background-body').hide();
            $(document).off('click', '#background-body', this.listener);
            return this.state = false;
        },

        toggle: function () {
            return !this.state ? this.show() : this.hide()
        }
    };

    $(document).on('mouseenter', '#head .top_menu menu.dropdown-menu', function () {
        if (top_menu_open) {
            $('#head .top_menu menu.dropdown-menu').removeClass('active');
            $('#head .top_menu submenu.dropdown-menu-context').hide();
            var submenu = $(this).attr('submenu');
            var position = $(this).position();
            $(this).addClass('active');
            $('.top_menu submenu#' + submenu).show().css('left', position.left + 5);
            $('#background').show().addClass('top-menu-background');
            top_menu_open = true;
        }
    });

    $(document).on('click', '#head .top_menu menu.dropdown-menu, .top-menu-background', function () {
        if (top_menu_open) {
            $('#head .top_menu menu.dropdown-menu').removeClass('active');
            $('#head .top_menu submenu.dropdown-menu-context').hide();
            $('#background').hide().removeClass('top-menu-background');
            top_menu_open = false;
        } else {
            var submenu = $(this).attr('submenu');
            var position = $(this).position();
            $(this).addClass('active');
            $('#head .top_menu submenu#' + submenu).show().css('left', position.left + 5);
            $('#background').show().addClass('top-menu-background');
            top_menu_open = true;
        }
    });

    $(document).on('click', '#head .top_menu submenu.dropdown-menu-context menu:not(".menu_separator")', function () {
        $('#head .top_menu menu.dropdown-menu').removeClass('active');
        $('#head .top_menu submenu.dropdown-menu-context').hide();
        $('#background').hide().removeClass('top-menu-background');
        top_menu_open = false;

        var anchor = $(this).attr('anchor');
        SystemWindow(anchor);
    });

    $(document).on('click', '#head .window-buttons button', function () {
        var anchor = $(this).attr('anchor');
        console.log(anchor);
    });
});
