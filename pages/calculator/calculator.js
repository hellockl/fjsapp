// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [
      '商业贷款', '公积金贷款'
    ],
    array: ['中国', '美国', '巴西', '日本'],
    index: 0,
    date: '2016-09-01',
    time: '12:01',
    currentTab: 0, // 导航栏切换索引
    loanYears:10,//代款年限
    loanTimeLimit:120, //货款期限
    items: [
      { name: '1', value: '等额本金', checked: 'true' },
      { name: '2', value: '等额本息' },
      
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  formSubmit:function(e){
    console.log(e.detail.value);
    let str = "amount="+e.detail.value.amount;
    str += "&type="+e.detail.value.type;
    str += "&datetime="+e.detail.value.datetime;
    str += "&rate=" + e.detail.value.rate;
    wx.navigateTo({
      url: './calculatordetail/calculatordetail?'+str,
      success: (res) => { },
      fail: (err) => {
        console.log(err)
      }
    });

  },
  // 导航栏操作
  onNavbarTap: function (ev) {
    this.setData({ currentTab: ev.currentTarget.dataset.index });
  },
  slider1change:function(e){
    this.setData({
       loanYears: e.detail.value,
       loanTimeLimit: e.detail.value * 12
    }) ;
    
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