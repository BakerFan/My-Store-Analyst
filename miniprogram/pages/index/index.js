//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: 'Hi 开发者！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [{
      name: 'fade',
      color: 'red'
    },
    {
      name: 'scale-up',
      color: 'orange'
    },
    {
      name: 'scale-down',
      color: 'olive'
    },
    {
      name: 'slide-top',
      color: 'green'
    }, {
      name: 'slide-bottom',
      color: 'cyan'
    },
    {
      name: 'slide-left',
      color: 'blue'
    },
    {
      name: 'slide-right',
      color: 'purple'
    },
    {
      name: 'shake',
      color: 'mauve'
    }
    ],
    toggleDelay: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  toggle(e) {
    console.log(e);
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton,
      modalName: e.currentTarget.dataset.target
    })
    setTimeout(function () {
      that.setData({
        animation: ''
      })
    }, 1000)
  }
})
