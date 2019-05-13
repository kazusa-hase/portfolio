
$(function() {

  // scroll to top

  const scrBtn = $('.to-top-link');

  $(scrBtn).on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 200);
    return false;
  });


  // セクション内要素の高さを自動合わせ

  // section-header-h2
  $('.course-name').matchHeight(
    {
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    }
  );

  // section-body-dl
  $('.course-point-list').matchHeight(
    {
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    }
  );
  

});
