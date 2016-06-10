'use strict';

describe('CityData', function() {
  var $httpBackend;
  var CityData;
  var testData = [
    {"address":"6237 S HALSTED PKWY ","aka_name":"SUBWAY","city":"CHICAGO","dba_name":"SUBWAY","facility_type":"Restaurant","inspection_date":"2015-11-24T00:00:00.000","inspection_id":"1589030","inspection_type":"Canvass","license_":"2079231","results":"Out of Business","risk":"Risk 1 (High)","state":"IL","zip":"60621"},
    {"address":"4129 191ST CT ","aka_name":"PLATES UP CATERING","city":"COUNTRY CLUB HILLS","dba_name":"PLATES UP CATERING","facility_type":"Shared Kitchen User (Short Term)","inspection_date":"2012-06-20T00:00:00.000","inspection_id":"1229732","inspection_type":"License","license_":"2162504","results":"Pass","risk":"Risk 1 (High)","state":"IL","zip":"60478"}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Phone` service before each test
  beforeEach(module('cityData'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _CityData_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('https://data.cityofchicago.org/resource/cwig-ma7x.json').respond(testData);

    CityData = _CityData_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the data from `https://data.cityofchicago.org/resource/cwig-ma7x.json`', function() {
    var cityData = CityData.query();

    expect(cityData).toEqual([]);

    $httpBackend.flush();
    expect(cityData).toEqual(data);
  });

});
