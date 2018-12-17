import MyPromise from '../code';
const assert = require('assert');

describe('my promise', () => {
    it('should be a function', () => {
        assert.equal(typeof MyPromise, 'function');
    });

    describe('instance', () => {
        let instance;
        before(() => {
            instance = new MyPromise();
        });

        it('should have a then function', () => {
            assert.equal(typeof instance.then, 'function');
        })

        it('should have a catch function', () => {
            assert.equal(typeof instance.catch, 'function');
        })
    });
});