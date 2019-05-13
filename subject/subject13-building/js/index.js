
$(function() {
  
  /* スクロールボタン
	-----------------------------------------*/
	var scrBtn = $('.scrollBtn');
	
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
  
  /* メニューボタン
	-----------------------------------------*/
  $('#menuBtn').on('click', function() {
    // slide menu 実装
    var menuPanel = $('.gnav-list:not(:animated)');
    menuPanel.toggleClass('slide-in');
    
    // スクロールのロック
    var base = $('html');
    base.toggleClass('lock');
    
  });
  
  
  
  
});













