;(function ($, window, undefined) {
  'use strict';

  // Init on DOM ready
  $(function () {

    // Wrap in images loaded as these are dependant on the height of containers
    // which is determined by the image dimensions

    $('.portfolio-item').imagesLoaded(function () {

      // Init sticky-kit
      $('.header-fixed').stick_in_parent();

      // Init Unslider
      //
      // https://github.com/idiot/unslider

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
