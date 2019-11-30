// miniprogram/pages/login.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userID: '',
    userID1: '111', //店主
    userID2: '222', //售货员
    userID3: '333', //投资商
    password: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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

  input: function(e) {
    console.log(e)
  },

  // 获取输入账号
  phoneInput: function(e) {
    console.log(e);
    this.setData({
      userID: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function(e) {
    console.log(e);
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function() {
    if (this.data.userID.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else if (this.data.userID == this.data.userID1) {
      wx.navigateTo({
        url: '/pages/index/index',
      })
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
    } else if (this.data.userID == this.data.userID2) {
      wx.navigateTo({
        url: '/pages/index_seller/index_seller',
      })
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
    } else if (this.data.userID == this.data.userID3) {
      wx.navigateTo({
        url: '/pages/index_investor/index_investor',
      })
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '用户不存在!',
        icon: 'loading',
        duration: 2000
      })
    }




  }


})