'use strict';

angular
  .module('header')
  .component('header', {
    template: '<nav class="navbar navbar-fixed-top header">' +
                '<h1 class="navbar-header">{{ $ctrl.title }}</h1>' +
              '</nav>',

    controller: function HeaderController() {
      var self = this;

      self.title = "Chicago Food Inspection Data Feed";
    }
  }
);
