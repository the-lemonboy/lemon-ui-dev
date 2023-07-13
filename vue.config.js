const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = {
  transpileDependencies: true,
  //关闭eslint校验
  lintOnSave: false,
pages:{
     index:{
      entry: 'src/main.js',
      template:'public/index.html',
      filename:'index.html'
     }
},

chainWebpack: config=>{
     config.module
      .rule('js')
      include.add(path.resolve(__dirname,'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(option => {
        return options
      })
}
}