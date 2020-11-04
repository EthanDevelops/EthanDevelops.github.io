(function($){
    'use strict';
      $(window).on('load', function () {
          if ($(".hourglass-container").length > 0)
          {
              $(".hourglass-container").fadeOut("slow");
          }
      });
  })(jQuery)