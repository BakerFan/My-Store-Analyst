const app = getApp();



Page({

  data: {
    selectArray_1: [{
      "id": 1,
      "text": '10.20'
    },
    {
      "id": 2,
      "text": '10.21'
    },
    {
      "id": 3,
      "text": '10.22'
    }],
    selectArray_2: [{
      "id": 1,
      "text": '10.23'
    },
      {
        "id": 2,
        "text": '10.24'
      },
      {
        "id": 3,
        "text": '10.25'
      }]
  },

  getDate_1: function (e) {
    //var test = e.detail.text
    /*wx.navigateTo({
      url: '../' + e.detail.id + '/index'
    });*/
    console.log(e.detail.text);
    for (let index in app.globalData.xNum) {
      if (app.globalData.xNum[index] == e.detail.text) {
        app.globalData.date_1 = index;
      }
    }
  },

  getDate_2: function (e) {
    //var test = e.detail.text
    /*wx.navigateTo({
      url: '../' + e.detail.id + '/index'
    });*/
    console.log(e.detail.text);
    for (let index in app.globalData.xNum) {
      if (app.globalData.xNum[index] == e.detail.text) {
        app.globalData.date_2 = index;
      }
    }
  },

  jumpTo: function () {
    var j = 0;
    for (var i = app.globalData.date_1; i <= app.globalData.date_2; i++) {
      app.globalData.dateArray[j] = app.globalData.xNum[i];
      j ++;
    }
    wx.navigateTo({
      url: '../' + 0 + '/index'
    });
  },
 
  onReady() {
  }
  
});