// pages/personCenter/personCenter.js
var app = getApp();
Page({
  data: {
    gridList: [
      { enName: 'favorite', zhName: '收藏' },
      { enName: 'history', zhName: '浏览记录' },
      
      { enName: 'setting', zhName: '设置' }
    ],
    skin: ''
  },
  onLoad: function (cb) {
    var that = this
    console.log(app.globalData.userInfo)
    // 检测是否存在用户信息
    if (app.globalData.userInfo != null) {
      that.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      app.getUserInfo()
    }
    typeof cb == 'function' && cb()
  },
  onShow: function () {
    var that = this
    that.setData({
      skin: 'https://static.sesine.com/wechat-weapp-movie/images/user_bg_1.jpg'
    })
    /*
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        if (res.data == "") {
          that.setData({
            skin: 'https://static.sesine.com/wechat-weapp-movie/images/user_bg_1.jpg'
          })
        } else {
          that.setData({
            skin: res.data
          })
        }
      }
    })*/
  },
  onPullDownRefresh: function () {
    this.onLoad(function () {
      wx.stopPullDownRefresh()
    })
  },
  viewGridDetail: function (e) {
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: "../" + data.url + '/' + data.url
    })
  },
  viewSkin: function () {
    wx.navigateTo({
      url: "../skin/skin"
    })
  }
})