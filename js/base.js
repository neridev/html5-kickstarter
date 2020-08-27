(function ($, window, document) {

	Frontend = {

        initConsole: () => {
            console.log('JS loaded!');
        },

		initLoad: () => {
			$('body').addClass('loaded');
			$('a').mouseup(function (e) {
				var isCtrlPressed = e.ctrlKey;
				var isShiftPressed = e.shiftKey;
				var isCommandPressed = e.metaKey;
				if (isCtrlPressed === true ||
						isShiftPressed === true ||
						isCommandPressed === true ||
						e.which == 2) {
					e.preventDefault();
					return false;
				}

				$('a').not('[href^=mailto], [href^=tel], [href^=javascript], [href^="#"], [target^=_blank], .fancybox').click(function () {
					$('body').removeClass('loaded');
				});
			});
        }
	};

}(window.jQuery, window, document));
