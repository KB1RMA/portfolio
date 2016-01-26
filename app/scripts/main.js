;(function ($, window, undefined) {
  'use strict';

  // Init on DOM ready
  $(function () {

    // Init

    $('.header-inner').stick_in_parent();


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

}(jQuery, window));
