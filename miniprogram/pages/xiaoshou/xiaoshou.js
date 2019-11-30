// miniprogram/pages/xiaoshou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  chakanjilu: function(e) {
    console.log(e);
    var anmiaton1 = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton1
    })
    setTimeout(function() {
      that.setData({
        animation: ''
      })
    }, 1000)
    wx.navigateTo({
      url: '/pages/xiaoshoujilu/xiaoshoujilu',
    })

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