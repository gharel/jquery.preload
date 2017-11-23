(function ($) {
	$.fn.preload = function () {
		this.each(function () {
			const $img = $('<img/>')
			$img[0].src = this
		})
	}
})(jQuery)
