const qcloud = require('./utils/wafer/index')
const config = require('./config')
const Session = qcloud.Session

App({
  onLaunch: function() {
    qcloud.setLoginUrl(config.loginUrl)
  },
  globalData: {
    login_user: null,
  },

  onShow: function(data) {
    console.log('场景值: ', data)
    this.doLogin()
  },

  doLogin: function() {
    qcloud.login({
      success: result => {
        const session = Session.get()
        this.globalData.login_user = session.userinfo
      },

      fail(error) {
        if (error.type === 'ERR_LOGIN_NEED_SIGNUP') {
          return wx.navigateTo({
            url: '/pages/signup/index',
          })
        }
      },
    })
  },
})
