import Dep from "./dep.js"

//实现消息订阅者
export default class Watcher{
  constructor(vm,expOrFn,cb){
    this.cb = cb
    this.vm = vm
    this.expOrFn = expOrFn
    this.value = this.get()
  }

  //消息订阅者刷新操作
  update(){
    this.run()
  }

  //刷新运行过程
  run(){
    const value = this.get()
    if( value !== this.value){
      this.value = value
      this.cb.call(this.vm)
    }
  }

  //获取指令表达式的值
  get(){
    //设置状态标志
    Dep.target = this
    //调用Object.defineProperty()注册的get劫持
    const value = this.vm._data[this.expOrFn]
      //还原状态标识
    Dep.target = null
    return value
  }
}
