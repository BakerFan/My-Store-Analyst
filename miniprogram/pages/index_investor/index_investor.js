//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    //motto: '欢迎，{{userID}} 你的身份是：投资商',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),



    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      src: '/images/summer1.jpg'

    }, {
      id: 1,
      type: 'image',
      src: '/images/summer2.jpg'

    }, {
      id: 2,
      type: 'image',
      src: '/images/summer3.jpg'

    }, {
      id: 3,
      type: 'image',
      src: '/images/summer4.jpg'

    }, {
      id: 4,
      type: 'image',
      src: '/images/summer4.jpg'

    }, {
      id: 5,
      type: 'image',
      src: '/images/spring1.jpg'

    }, {
      id: 6,
      type: 'image',
      src: '/images/spring2.jpg'

    }],


  },


  toggle(e) {
    console.log(e);
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton
    })
    setTimeout(function() {
      that.setData({
        animation: ''
      })
    }, 1000)
  },




  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

  chakanfenxi: function(e) {
    console.log(e);
    var anmiaton2 = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton2
    })
    setTimeout(function() {
      that.setData({
        animation: ''
      })
    }, 1000)
    wx.navigateTo({
      url: '/pages/tongjifenxi/tongjifenxi',
    })

  },



  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },




})