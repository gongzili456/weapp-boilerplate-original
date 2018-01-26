/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://weapp.bind.ai'
// const host = 'http://localhost:8000'

var config = {
  // 下面的地址配合云端 Demo 工作
  host,

  // 登录地址，用于建立会话
  loginUrl: `${host}/api/v1/sign/weapp`,
}

module.exports = config
