'use strict';

angular
  .module('header')
  .component('header', {
    template: '<nav class="navbar navbar-fixed-top header">' +
                '<img ' +
                'src="{{ $ctrl.source }}" ' +
                'alt="{{ $ctrl.alt }}" />' +
                //'<h1 class="navbar-header">{{ $ctrl.title }}</h1>' +
                //'<a href="#"><i class="fa fa-info-circle float-right" aria-hidden="true"></i></a>' +
              '</nav>',

    controller: function HeaderController() {
      var self = this;
      self.source = "https://data.cityofchicago.org//stylesheets/images/domains/data.cityofchicago.org/chicago_logo.png";
      self.alt = "City of Chicago Flag";
      self.title = "Chicago Food Inspection Data Feed";
    }
  }
);
