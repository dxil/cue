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
  })
})