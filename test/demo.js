//var assert = require('chai').assert;

/*describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
        });
    });
});*/

describe('String', function () {
    describe('#length', function () {
        it('should return length of the array', function () {
            assert.equal(18, ('Ovo je test string').length);
        });
    });
});

function sum(x, y) {
    return x + y;
};

describe('sum()', function () {
    it('should return the sum of two numbers', function () {
        assert.equal(10, sum(4, 6));
    });
});

function createObject(id, name) {
    return obj = {
        id: id,
        name: name
    }
}

describe('createObject()', function () {
    it('should return an object', function () {
        //assert.equal({ id: 0, name: 'Ben' }, createObject(0, 'Ben'));
        expect(new createObject(0, 'Ben')).to.have.property('name', 'Ben');
    });
});

function sumOfArray(array) {
    var sum = 0,
        len = array.length;
    for (var i = 0; i < len; i++) {
        sum += array[i];
    }
    return sum;
}

describe('sumOfArray()', function () {
    it('should return sum of the array elements', function () {
        assert.equal(20, sumOfArray([2, 3, 5, 10]));
    });
});