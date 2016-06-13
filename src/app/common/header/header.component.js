'use strict';

angular
  .module('header')
  .component('header', {
    templateUrl: 'app/common/header/header.template.html',

    controller: function HeaderController() {
      var self = this;
      
      self.source = 'https://data.cityofchicago.org//stylesheets/images/domains/data.cityofchicago.org/chicago_logo.png';
      self.alt = 'City of Chicago Flag';
      self.title = 'Chicago Food Inspection Data Feed';
    }
  }
);
