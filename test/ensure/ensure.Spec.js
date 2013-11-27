describe('default', function () {

    var ensureFilter;

    beforeEach(module('frapontillo.ex.filters'));
    beforeEach(inject(function ($filter) {
        ensureFilter = $filter('ensure');
    }));

    it('should ignore undefiend', inject(function ($filter) {
        var source;
        expect(ensureFilter(source)).toBeUndefined();
    }));

    it('should ignore null', inject(function ($filter) {
        var source = null;
        expect(ensureFilter(source)).toEqual(null);
    }));

    it('should set length', inject(function ($filter) {
        var source;
        source = [];
        expect(source.length).toEqual(0);
        source = ensureFilter(source, '2');
        expect(source.length).toEqual(2);
    }));

    it('should have no null / undefined elements', inject(function ($filter) {
        var source = [];
        source.length = 2;
        source = ensureFilter(source);

        expect(source[0]).toEqual(jasmine.any(Object));
        expect(source[1]).toEqual(jasmine.any(Object));
    }));

    it('should leave this alone', function () {
        var source, obj1, obj2;
        source = [];
        obj1 = {one: 1};
        obj2 = {two: 2};
        source.push(obj1, obj2);

        source = ensureFilter(source, '1');

        expect(source.length).toBe(2);
        expect(source[0]).toBe(obj1);
        expect(source[1]).toBe(obj2);
    });
});