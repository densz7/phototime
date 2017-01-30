(function() {
    $(document).ready(function() {
        var flag = false,
            menu = $(".mobile-nav");

        function toggleMenu() {
            $(".mobile-menu-icon__lines").toggleClass("mobile-menu-icon__lines--close");
            menu.toggleClass("banner__mobile-nav--show");
        }

        $(".mobile-menu-icon").click(toggleMenu);

        $(document).click(function(e) {
            var target = $(e.target);

            if (target.hasClass("mobile-nav") || target.parent().hasClass("mobile-nav")) return;
            
            if (!target.hasClass("mobile-menu-icon") && !target.parent().hasClass("mobile-menu-icon") && menu.hasClass("banner__mobile-nav--show")) {
                toggleMenu();
            }
        });
    });
})();