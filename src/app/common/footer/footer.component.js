'use strict';

angular
  .module('footer')
  .component('footer', {
    template: '<nav class="navbar navbar-fixed-bottom footer">' +
                '<a href="{{ $ctrl.linkUrl }}" title="{{ $ctrl.linkTitle }}">' +
                  '<i class="fa fa-github" aria-hidden="true"></i></a>' +
                '</a>' +
              '</nav>',

    controller: function FooterController() {
      var self = this;

      self.linkUrl = "https://github.com/kagos/visualizations.git";
      self.linkTitle = "Check this project out on github";
    }
  }
);
