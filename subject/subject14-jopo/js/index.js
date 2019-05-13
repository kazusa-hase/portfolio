
$(function() {
	
	/* ハンバーガーボタン 
	-----------------------------------------*/
	$('#menu-btn').on('click', function() {
		var $headerNav = $('.gnav');
		if ($headerNav.css('display') == 'none') {
			$headerNav.fadeIn();
		} else {
			$headerNav.fadeOut();
		}
	});
	
	/* スクロールボタン
	-----------------------------------------*/
	var scrBtn = $('.scr-btn');

	// スクロールボタンを非表示
	scrBtn.hide();

	// スクロールボタンの表示・非表示設定
	$(window).scroll(function() {
		if ($(this).scrollTop() < 100) {
			$(scrBtn).fadeOut();
		} else {
			$(scrBtn).fadeIn();
		}
	});

	// scroll to top
	$(scrBtn).on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
	
});	
