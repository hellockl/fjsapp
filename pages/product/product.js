// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [
      '最新', '热门', '推荐'
    ],
    currentTab: 0, // 导航栏切换索引
    news: {
      item: [
        {
          type: 'doc',
          commentsUrl: "sub_23213629",
          commentsall: "40",
          documentId: "sub_23213629",
          url: "https://api.iclient.ifeng.com/api_vampire_article_detail?aid=sub_23213629&channelid=TY43",
          weburl: "https://share.iclient.ifeng.com/vampire/sharenews.f?fromType=vampire&aid=sub_23213629",
          source: "房金所",
          staticId: "sub_23213629",
          thumbnail: "http://img.fangjinsuo.com/orglogo/2017/0711/orglogo_1499766689_8680.gif",
          title: "房金一号-房抵贷",
          updateTime: "2017/07/21 23:10:00"

        },
        {
          type: 'doc',
          commentsUrl: "sub_23213629",
          commentsall: "40",
          documentId: "sub_23213629",
          url: "https://api.iclient.ifeng.com/api_vampire_article_detail?aid=sub_23213629&channelid=TY43",
          weburl: "https://share.iclient.ifeng.com/vampire/sharenews.f?fromType=vampire&aid=sub_23213629",
          source: "利率低",
          staticId: "sub_23213629",
          thumbnail: "http://img.fangjinsuo.com/orglogo/2017/0711/orglogo_1499766689_8680.gif",
          title: "房金二号-房抵贷",
          updateTime: "2017/07/21 23:10:00"

        },
        {
          type: 'doc',
          commentsUrl: "sub_23213629",
          commentsall: "40",
          documentId: "sub_23213629",
          url: "https://api.iclient.ifeng.com/api_vampire_article_detail?aid=sub_23213629&channelid=TY43",
          weburl: "https://share.iclient.ifeng.com/vampire/sharenews.f?fromType=vampire&aid=sub_23213629",
          source: "放款快",
          staticId: "sub_23213629",
          thumbnail: "http://img.fangjinsuo.com/orglogo/2017/0711/orglogo_1499766689_8680.gif",
          title: "房金三号-房抵贷",
          updateTime: "2017/07/21 23:10:00"

        },
      ]
    }
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
  navToProduct(event) {
    //let str = dealUrl.getUrlTypeId(event);
    wx.navigateTo({
      url: './productdetail/productdetail',
      success: (res) => { },
      fail: (err) => {
        console.log(err)
      }
    });
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