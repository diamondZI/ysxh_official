import clickOutside from './clickOutside'

 
const directives:any = {  //汇总自定义指令
 clickOutside
}
 
export default {  //导出自定义指令
  install(app:any) {// 以安装的方式插到app中
    Object.keys(directives).forEach((key) => {    // 遍历directives对象的key
      app.directive(key, directives[key])

    })
  }
}
