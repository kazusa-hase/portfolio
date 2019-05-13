
$(function(){

  // scroll to top

  const link = $('.to-top-link')

	$(link).on('click', function() {

		$('html, body').animate({

      scrollTop: 0
      
    }, 300);

    return false;
    
	});

});
