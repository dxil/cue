import Dep from "./dep.js"

export default class Observer{
  constructor(value){
    //属性value获取
    this.value = value
    //属性遍历
    this.walk(value)
  }
  //遍历操作
  walk(value){
    //获取属性value的keys
    var keys = Object.keys(value)
      //遍历keys
    keys.forEach(
    //将key对应的值转换为劫持属性
      key=>this.convert(key,value[key])
    )
  }

  //转换属性为劫持属性
  convert(key,val){
    defineReactive(this.value,key,val)
  }

}
//属性转换操作
export function defineReactive(obj,key,val){
  // 创建订阅器数组
  var dep = new Dep()

  // val递归遍历
  var childOb = observe(val)

  // 注册为劫持属性
  Object.defineProperty(obj,key, {
    enumerable : true,
    configurable : true,
    get:() => {
      //检查是否watch的get，注册到Dep中
      if(Dep.target){
        dep.addSub(Dep.target)
      }
      return val
    },
    set:newVal=>{
      // 旧值
      var value = val
      // 比较新旧值
      if(newVal === value){
        return
      }
      // 值不相等进行处理
      val = newVal
      childOb = observe(newVal)
      // 广播数据更新到消息订阅者数组
      dep.notify()
    }
  })
}

//属性递归操作
export function observe(value,vm){
  if(!value||typeof value != 'object'){
    return
  }
  //生成数据监视器observer
  return new Observer(value)
}
