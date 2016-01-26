;(function ($, window, undefined) {
  'use strict';

  // Init on DOM ready
  $(function () {

    // Init

    $('.header-inner').stick_in_parent();


    // Init Unslider
    //
    // https://github.com/idiot/unslider

    // Wrap in images loaded as unslider seems to have a little bit of
    //  trouble resizing the slider height unless they're loaded.

    $('.portfolio-item').imagesLoaded(function () {
      $('.slider').unslider({
        animateHeight: true,
        arrows: {
          //  Unslider default behaviour
          prev: '<a class="slide-arrow prev"></a>',
          next: '<a class="slide-arrow next"></a>'
        }
      });
    });

  });

}(jQuery, window));
