describe('default', function () {
    var defaultFilter;

    beforeEach(module('ex.filters'));
    beforeEach(inject(function ($filter) {
        defaultFilter = $filter('default');
    }));

    it('should return the number 1337', function () {
        var inputVal = 1337;
        expect(defaultFilter(inputVal)).toEqual(1337);
    });

    it('should return a "default" string', function () {
        var inputVal = undefined;
        var defaultVal = "default";
        expect(defaultFilter(inputVal, defaultVal)).toEqual("default");
    });

    it('should return a "default" string', function () {
        var inputVal = null;
        var defaultVal = "default";
        expect(defaultFilter(inputVal, defaultVal)).toEqual("default");
    });

    it('should return the number 0', function () {
        var inputVal = 0;
        var defaultVal = "default";
        expect(defaultFilter(inputVal, defaultVal)).toEqual(0);
    });
});