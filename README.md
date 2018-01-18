# cue
MVVM框架

Core 核心组件 获取当前模块子模块，销毁实例

Core *\_\_proto\_\_* 指向 Module

Module *\_\_proto\_\_* 指向 Root

```javascript
var app = Sugar.core.create('app', App)
```
*App* 实例使用 *Core \_\_proto\_\_*的  *Module* 上的 *create* 方法创建根节点，方法体内调用 *new App*
*App* 中通过传入*App* 中的基础配置 如 *model* 数据，*methods* 方法等等后 通过 *this.super('init', config)* 来调用父类 *Component* 中的 *init* 来进行进一步的配置
之后再在 *init* 方法中 *new MVVM* 来进行*Compile* 和 *parse* 等底层解析操作

Component

[Object与Function](https://www.kancloud.cn/kancloud/javascript-prototype-closure/66341)
