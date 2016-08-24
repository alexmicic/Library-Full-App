// write a test for this service
describe('ApiService', function () {

    var ApiService;

    beforeEach(module('Services'));

    beforeEach(inject(function (_ApiService_) {
        ApiService = _ApiService_;
    }))

    describe('apiRequest', function () {

        it('should create new apiRequest', inject(function ($http) {
            
            //define some data to compare against
            var res = 'foo';

            //call the function we're testing
            var result = ApiService.apiRequest('Request method', 'http://localhost/bar', 'Data Obj', function () { });

            //assertions
            result.then(function (data) {
                expect(data).to.equal(res);
                done();
            }, function (error) {
                assert.fail(error);
                done();
            });

        }));

    });

});