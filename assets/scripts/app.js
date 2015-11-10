'use strict';

(function ($) {
  $(function() {
    var $mainListItem = $('.main-list-item');
    function handleDropDown() {
      $(this).children().toggleClass('show');
    }
    $mainListItem.on('mouseenter', handleDropDown);
    $mainListItem.on('mouseleave', handleDropDown);
  });
})(jQuery);
