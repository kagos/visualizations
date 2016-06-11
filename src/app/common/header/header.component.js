'use strict';

angular
  .module('header')
  .component('header', {
    template: '<nav class="navbar navbar-fixed-top header">' +
                '<img src="https://data.cityofchicago.org//stylesheets/images/domains/data.cityofchicago.org/chicago_logo.png" />' +
                //'<h1 class="navbar-header">{{ $ctrl.title }}</h1>' +
              '</nav>',

    controller: function HeaderController() {
      var self = this;

      self.title = "Chicago Food Inspection Data Feed";
    }
  }
);
