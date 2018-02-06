let OP = Object.prototype
let has = OP.hasOwnProperty

function typeOf (test, type) {
  return typeof test === type
}

/**
 * 是否是对象
 * */
export function isObject (object) {
  return OP.toString.call(object) === '[object Object]'
}

/**
 * 是否是数组
 * */
export function isArray (array) {
  return Array.isArray(array)
}

/**
 * 是否是函数
 * */
export function isFunc (func) {
  return typeOf(func, 'function')
}

/**
 * 是否是字符串
 * */
export function isString (str) {
  return typeOf(str, 'string')
}

/**
 * 是否是布尔值
 * */
export function isBool (bool) {
  return typeOf(bool, 'boolean')
}

/**
 * 是否是数字
 * */
export function isNumber (num) {
  return typeOf(num, 'number') && !isNaN(num)
}

/**
 * 是否是空对象
 * */
export function isEmptyObject (object) {
  return Object.keys(object).length === 0
}

let cons = window.console

/**
 * 打印警告信息
 * */
export function warn () {
  if (cons) {
    cons.warn.apply(cons, arguments)
  }
}

/**
 * 打印错误信息
 * */
export function error () {
  if (cons) {
    cons.error.apply(cons, arguments)
  }
}

/**
 * 打印日志信息
 * */
export function log () {
  if (cons) {
    cons.log.apply(cons, arguments)
  }
}

/**
 * 对自有属性的检测
 **/
export function hasOwn (obj, key) {
  return obj && has.call(obj, key)
}

/**
 * 拓展对象属性
 * */
export function extend () {
  let options, copy, name
  let target = arguments[0] || {}, i = 1, deep = false, length = arguments.length

  // get value of deep //todo 缺少deep = true时的拓展 比如 {a: {c:1, d:2}} 和 {a: {e: 3, f: 4}}的合并
  if (isBool(target)) {
    deep = target
    target = arguments[i] || {}
    i++
  }

  // if target is a string or something
  if (typeof target !== 'object' && !isFunc(target)) {
    target = {}
  }

  // if only one arguments is extend
  if (i === length) {
    target = this
    i--
  }

  for (; i < length; i++) {
    if ((options = arguments[i]) != null) {
      for (name in options) {
        copy = options[name]
        if (copy === target) {
          continue
        }
        target[name] = copy
      }
    }
  }
  return target
}

export function each (iterator, callback, content) {
  let ret
  if (!content) {
    content = this
  }
  if (isArray(iterator)) {
    for (let i = 0; i < iterator.length; i++) {
      ret = callback.call(content, i, iterator[i])
      if (ret) {
        iterator[i] = ret
      }
    }
  }
  if (isObject(iterator)) {
    for (let key in iterator) {
      ret = callback.call(content, key, iterator[key])
      if (ret) {
        iterator[key] = ret
      }
    }
  }

}