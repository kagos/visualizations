'use strict';

angular
  .module('header')
  .controller('HeaderController', function() {
      const _self = this;

      _self.source = 'https://data.cityofchicago.org//stylesheets/images/domains/data.cityofchicago.org/chicago_logo.png';
      _self.alt = 'City of Chicago Flag';
      _self.title = 'Chicago Food Inspection Data Feed';
    }
  );
