import Observer from './observer.js'

/**
 * Compile 编译模块
 * 为model建立observer
 * 将computed计算属性建立watcher
 *
 * */
export default function Compile () {
  new Observer()
}