Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameIndex: null,
    pickerIndex: null,
    picker: ['表格', '柱状图', '折线图'],
    name: ['aaa', 'bbb', 'ccc'],
    date1: '2018-12-25',
    date2: '2018-12-25',

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


  NameChange(e) {
    console.log(e);
    this.setData({
      nameIndex: e.detail.value
    })
  },

  PickerChange(e) {
    console.log(e);
    this.setData({
      pickerIndex: e.detail.value
    })
  },

  Date1Change(e) {
    this.setData({
      date1: e.detail.value
    })
  },
  Date2Change(e) {
    this.setData({
      date2: e.detail.value
    })
  },

  chakantongjitu: function(e) {
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

  }
})