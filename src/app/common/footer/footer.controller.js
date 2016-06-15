'use strict';

angular
  .module('header')
  .controller('FooterController', function() {
      const _self = this;

      _self.linkUrl = 'https://github.com/kagos/visualizations.git';
      _self.linkTitle = 'Check this project out on github';
      _self.icon = 'fa-github';
    }
  );
