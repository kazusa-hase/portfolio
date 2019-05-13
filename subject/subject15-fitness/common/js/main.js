
$(function() {

  // flexアイテムの高さを自動合わせ

  $('.course-name').matchHeight(
		{
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    }
	);

	
	// メニューボタンの開閉

	const menuBtn = $('.menu-btn')
				menuAria = $('.header-nav');

	menuBtn.on('click', ()=> {

		menuBtn.toggleClass('close-menu-btn');

		menuAria.slideToggle('300');

	});


	// ------------------------
  // ヘッダースクロールエフェクト
	// ------------------------


	// ヘッダーのメニューバーをスクロール量により固定する
	
	const windowWidth = $(window).width(),
				menuBar = $('.menu-bar'),
				menuBarTopOffset = menuBar.offset().top,
				classFixed = 'fixed';
	
	$(window).scroll( () => {

		if (windowWidth > 951) {
		
			if ($(this).scrollTop() > menuBarTopOffset) {
	
				$(menuBar).addClass(classFixed);
	
			} else {
	
				$(menuBar).removeClass(classFixed);
	
			}

		}

	});


	// ウェルカムセクションへスムーススクロール

	const jumpBtn = $('.jump-btn');
	
	jumpBtn.on('click', () => {

		const sectionTopOffset = $('.section-welcome').offset().top,
					menuBarHeight = menuBar.height(),
					offset = sectionTopOffset - menuBarHeight;
		
		$('html, body').animate({
			scrollTop: offset
		}, 'swing');

		return false;

	});


});
