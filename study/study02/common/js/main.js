
$(function() {
	
	/* スクロールボタン
	-----------------------------------------*/
	var scrBtn = $('.scr-btn');

	// scroll to top
	$(scrBtn).on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 300);
		return false;
	});
	
});	
