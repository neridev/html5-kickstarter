(function ($, window, document) {
    $(window).on("load", function () {
        Frontend.initLoad();
        Frontend.initConsole();
    });
})(window.jQuery, window, document);

// back button fix
$(window).on("unload", function () {});

// back button fix - ios
window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};
