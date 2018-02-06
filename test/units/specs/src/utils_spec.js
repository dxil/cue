const utils = require('../../../../src/utils')
const assert = require('assert');

describe('utils', function () {
  describe('extend', function () {
    it('extend 可以拓展对象', function () {
      let a = {}
      let b = {a:1}
      let c = {b:2}
      assert.deepEqual(utils.extend(a, b, c), {a:1,b:2})
    })
    it('extend 循环引用不拓展', function () {
      let a = {}
      let b = {a:1}
      let c = {b:a}
      assert.deepEqual(utils.extend(a, b, c), {a:1})
    })
    it('each 遍历,可以遍历Object, Array', function () {
      let a = [1, 2, 3]
      let b = {
        c: 4,
        d: 5,
        e: 6
      }
      utils.each(a, function (key, value) {
        return value * 2
      })
      utils.each(b, function (key, value) {
        return value * 2
      })
      assert.deepEqual(a, [2, 4, 6])
      assert.deepEqual(b, {c: 8, d: 10, e: 12})
    })
    it('each 遍历,可以传入content作用域', function () {
      let a = [1, 2, 3]
      let b = [4, 5, 6]
      utils.each(a, function (key, value) {
        this[key] = value
      }, b)
      assert.deepEqual(b, [1, 2, 3])
    })
  })
})