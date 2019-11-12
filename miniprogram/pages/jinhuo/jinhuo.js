// miniprogram/pages/jinhuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gifTitle:"进货中……",
    target: "",
    clienty: 0,
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour:false,
    scroll: false,
    
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      var res = wx.getSystemInfoSync();
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      this.setData({
        width: windowWidth,
        height: windowHeight
      })
    } catch (e) {
      console.error('getSystemInfoSync failed!')
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  input: function (e) {
    console.log(e)
  },

  quxiaojinhuo: function (e) {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  querenjinhuo(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })

    setTimeout(function () {
      this.setData({
        modalName: null,
      })
    }.bind(this), 3000)

    wx.navigateTo({
      url: '/pages/index/index',
    })
    
  },

  




  moveStartOne(e) {
    this.setData({
      clienty: e.changedTouches[0].clientY,
      scroll: true,
      stepOne: true,
    })
  },


  moveEndOne(e) {
    if (e.changedTouches[0].clientY <= this.data.clienty) {
      this.setData({
        target: 'workFlow',
      })
      setTimeout(function () {
        this.setData({
          scroll: false,
        })
      }.bind(this), 300)
    }
  },
  toPjd() {
    let data = this.data;
    wx.navigateTo({
      url: '/pages/pjdResult/pjdResult?peopleNum=' + data.people + '&homesize=' + data.homeSizeNum + '&ys=' + data.ys + '&hx=' + data.hx,
    })
  },

  stepOneHandle: function () {
    this.setData({
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      scroll: true,
    })
    setTimeout(function () {
      this.setData({
        target: 'workFlow',
      })
    }.bind(this), 20)
    setTimeout(function () {
      this.setData({
        scroll: false,
      })
    }.bind(this), 300)
  },
  

  stepTwoHandle: function () {
    this.setData({
      stepTwo: true,
      stepOne: false,
      stepThree: false,
      scroll: true,
    })
    setTimeout(function () {
      this.setData({
        target: 'workFlow',
      })
    }.bind(this), 20)
    setTimeout(function () {
      this.setData({
        scroll: false,
      })
    }.bind(this), 300)
  },


  stepThreeHandle: function () {
    this.setData({
      stepThree: true,
      stepOne: false,
      stepTwo: false,
      scroll: true,
    })
    setTimeout(function () {
      this.setData({
        target: 'workFlow',
      })
    }.bind(this), 20)
    setTimeout(function () {
      this.setData({
        scroll: false,
      })
    }.bind(this), 300)
  },



})