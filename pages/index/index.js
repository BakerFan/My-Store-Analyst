//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    
    charts: [{
        id: 'bar',
        name: '柱'
      },
      {
        id: 'pie',
        name: '饼图'
      }, {
        id: 'line',
        name: '折线图'
      }]
  },

  onReady(){},

  open: function (e) {
    wx.navigateTo({
      url: '../' + e.target.dataset.chart.id + '/index'
    });
  }
})
