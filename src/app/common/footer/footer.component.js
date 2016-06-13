'use strict';

angular
  .module('footer')
  .component('footer', {
    templateUrl: 'app/common/footer/footer.template.html',

    controller: function FooterController() {
      var self = this;

      self.linkUrl = 'https://github.com/kagos/visualizations.git';
      self.linkTitle = 'Check this project out on github';
      self.icon = 'fa-github';
    }
  }
);
