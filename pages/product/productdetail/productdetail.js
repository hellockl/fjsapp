// pages/product/productdetail/productdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [
      '申请条件', '所需材料', '机构简介'
    ],
    currentTab: 0, // 导航栏切换索引
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 导航栏操作
  onNavbarTap: function (ev) {
    this.setData({ currentTab: ev.currentTarget.dataset.index });
  },
  navToApply:function(){
    wx.navigateTo({
      url: '../../apply/apply',
      success: (res) => { },
      fail: (err) => {
        console.log(err)
      }
    });

  },
  makephonecall: function () {
    //hotapp.onEvent("callphone")
    wx.makePhoneCall({
      phoneNumber: '4008102999'
    })
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
  
  }
})