# Server

> 接口调用统一分模块管理文件夹，接口调用函数返回一个 promise  
> 模块中封装接口调用，可以做一下公共的数据处理和统一的错误处理，return 一个结果  
> 在 vue 实例中通过`this.$server[函数名]`调用  
> 接口调用可以使用`Vue.prototype.$http`或者`this.$http`的方式去请求接口  
> `this.$http`的形式需要在实例中调用封装函数时通过`call、bind、apply`绑定`this`指向

## Global

> 公共模块接口  
> 待续。。。
