import Compile from './compile.js'
import {
  each,
  isFunc
} from '../utils.js'

export default function MVVM (options) {
  let context = options.context || options.data

  // 将事件函数绑定 this 指向调用者
  each(options.data, function (key, value) {
    if (isFunc(value)) {
      options.data[key] = value.bind(context)
    }
  })

  // 合并methods 到 data中 并绑定this
  each(options.methods, function (key, value) {
    options.data[key] = value.bind(context)
  })

  new Compile(options)
}