// Karma configuration
// Generated on Thu Jun 09 2016 20:47:51 GMT-0500 (Central Daylight Time)

module.exports = function(config) {
  config.set({

    basePath: 'src/',

    frameworks: ['jasmine'],

    files: [
      'vendor/angular/angular.js',
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/angular-resource/angular-resource.js',

      'app/app.js',

      'app/**/*.module.js',
      'app/**/*.component.js',
      'app/**/*.service.js',
      'app/**/*.spec.js'
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
}
