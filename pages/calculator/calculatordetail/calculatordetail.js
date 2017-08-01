// pages/calculator/calculatordetail/calculatordetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [
      '等额本息', '等额本金'
    ],
    currentTab: 0, // 导航栏切换索引
    monthpay:0,     //月还款或首月还款
    debt_duration:0, // 贷款期数
    debt_years:0,    //贷款年限
    total_money:0,   //还款总额
    total_interest:0,//总利息
    amount_money:0,  //贷款金额
    news: {
      item: [
        {
          type: 'doc',
          commentsUrl: "sub_23213629",
          commentsall: "40",
          documentId: "sub_23213629",
          url: "https://api.iclient.ifeng.com/api_vampire_article_detail?aid=sub_23213629&channelid=TY43",
          weburl: "https://share.iclient.ifeng.com/vampire/sharenews.f?fromType=vampire&aid=sub_23213629",
          source: "凤凰体育",
          staticId: "sub_23213629",
          thumbnail: "http://img.fangjinsuo.com/orglogo/2017/0711/orglogo_1499766689_8680.gif",
          title: "中国女排3-1击败日本队 获香港大奖赛开门红",
          updateTime: "2017/07/21 23:10:00"

        },
        {
          type: 'doc',
          commentsUrl: "sub_23213629",
          commentsall: "40",
          documentId: "sub_23213629",
          url: "https://api.iclient.ifeng.com/api_vampire_article_detail?aid=sub_23213629&channelid=TY43",
          weburl: "https://share.iclient.ifeng.com/vampire/sharenews.f?fromType=vampire&aid=sub_23213629",
          source: "凤凰体育",
          staticId: "sub_23213629",
          thumbnail: "https://d.ifengimg.com/w198_h141_q100/img1.ugc.ifeng.com/newugc/20170721/23/wemedia/34f3874e434f6ac4a391c62d128e499407b3712f_size29_w552_h420.jpg",
          title: "中国女排3-1击败日本队 获香港大奖赛开门红",
          updateTime: "2017/07/21 23:10:00"

        },
        {
          type: 'doc',
          commentsUrl: "sub_23213629",
          commentsall: "40",
          documentId: "sub_23213629",
          url: "https://api.iclient.ifeng.com/api_vampire_article_detail?aid=sub_23213629&channelid=TY43",
          weburl: "https://share.iclient.ifeng.com/vampire/sharenews.f?fromType=vampire&aid=sub_23213629",
          source: "凤凰体育",
          staticId: "sub_23213629",
          thumbnail: "http://img.fangjinsuo.com/orglogo/2017/0711/orglogo_1499766689_8680.gif",
          title: "中国女排3-1击败日本队 获香港大奖赛开门红",
          updateTime: "2017/07/21 23:10:00"

        },
      ],
      

    }
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({ currentTab: options.type-1 });
    let amount_money = options.amount;
    let interest_rate = options.rate/1200;
    let debt_duration = options.datetime * 12;
    //每月月供额=〔贷款本金×月利率×(1＋月利率)＾还款月数〕÷〔(1＋月利率)＾还款月数-1〕
    //每月应还利息=贷款本金×月利率×〔(1+月利率)^还款月数-(1+月利率)^(还款月序号-1)〕÷〔(1+月利率)^还款月数-1〕
    //每月应还本金=贷款本金×月利率×(1+月利率)^(还款月序号-1)÷〔(1+月利率)^还款月数-1〕
    //总利息=还款月数×每月月供额-贷款本金
    var first_paid = (amount_money*10000 * interest_rate * Math.pow((1 + parseFloat(interest_rate)), debt_duration)) / (Math.pow((1 + parseFloat(interest_rate)), debt_duration) - 1)
    this.setData({ 
      monthpay: first_paid.toFixed(2),
      debt_duration: debt_duration, // 贷款期数
      debt_years: options.datetime,    //贷款年限
      total_money: 0,   //还款总额
      total_interest: 0,//总利息
      amount_money:amount_money, //贷款总额
      

    });

  },
  navToArticle(event) {
    //let str = dealUrl.getUrlTypeId(event);
    wx.navigateTo({
      url: '../../article-page/article-page',
      success: (res) => { },
      fail: (err) => {
        console.log(err)
      }
    });
  },
  navToMonthpayDetail(event) {
    //let str = dealUrl.getUrlTypeId(event);
    wx.navigateTo({
      url: '../monthpay/monthpay',
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