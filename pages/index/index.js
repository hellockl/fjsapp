//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js');
var that;
Page({
  data: {
    navbar: [
      '最新', '热门', '活动'
    ],
    /*
    section: [
      { name: '精选', id: '1001' }, { name: '黄金单身汉', id: '1032' },
      { name: '综艺', id: '1003' }, { name: '电视剧', id: '1004' },
      { name: '电影', id: '1005' }, { name: '少儿', id: '1021' }
    ],
    currentId: '1001',
    */
    currentTab: 0, // 导航栏切换索引
    slider: [
      {
        id:11160,
        linkUrl:"http://y.qq.com/w/taoge.html?id=0",
        picUrl:"http://img.fangjinsuo.com/banner/2016/0429/banner_1461875185_3212.jpg"
      },
      {
        id: 11160,
        linkUrl: "http://y.qq.com/w/taoge.html?id=0",
        picUrl: "http://img.fangjinsuo.com/banner/2016/0429/banner_1461875124_8671.png"
      }
    ],
    motto: 'Hello World',
    userInfo: {},
    image:"http://img.fangjinsuo.com/orglogo/2017/0711/orglogo_1499766689_8680.gif",
    news:{
      item:[
        {
          type: 'doc',    
          commentsUrl:"sub_23213629",
          commentsall:"40",
          documentId:"sub_23213629" ,   
          url:"https://api.iclient.ifeng.com/api_vampire_article_detail?aid=sub_23213629&channelid=TY43",
          weburl:"https://share.iclient.ifeng.com/vampire/sharenews.f?fromType=vampire&aid=sub_23213629",
          source:"房金所",
          staticId:"sub_23213629",
          thumbnail:"http://img.fangjinsuo.com/orglogo/2017/0711/orglogo_1499766689_8680.gif",
          title: "房金1号-房押贷",
          updateTime:"2017/07/21 23:10:00"
        
        },
        {
          type: 'doc',
          commentsUrl: "sub_23213629",
          commentsall: "40",
          documentId: "sub_23213629", 
          url: "https://api.iclient.ifeng.com/api_vampire_article_detail?aid=sub_23213629&channelid=TY43",
          weburl: "https://share.iclient.ifeng.com/vampire/sharenews.f?fromType=vampire&aid=sub_23213629",
          source: "房金所",
          staticId: "sub_23213629",
          thumbnail: "http://img.fangjinsuo.com/orglogo/2017/0711/orglogo_1499766697_6018.gif",
          title: "房金2号-经营贷",
          updateTime: "2017/07/21 23:10:00"

        },
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
          title: "房金3号-经营贷",
          updateTime: "2017/07/21 23:10:00"

        },
      ]
    },
    filmDetail:{
      casts:[
        {
          lt: "https://movie.douban.com/celebrity/1317642/",
          avatars: {
            large: "https://img1.doubanio.com/img/celebrity/large/40719.jpg",
            medium: "http://static.fangjinsuo.com/img/fjs/about/about-12.png",
            small: "https://img1.doubanio.com/img/celebrity/small/40719.jpg",
          },

          id: "1317642",
          name: "王玉东",
          job:'懂事长'

        },
        {
          lt: "https://movie.douban.com/celebrity/1317642/",
          avatars: {
            large: "https://img1.doubanio.com/img/celebrity/large/40719.jpg",
            medium: "http://static.fangjinsuo.com/img/fjs/about/about-16.png",
            small: "https://img1.doubanio.com/img/celebrity/small/40719.jpg",
          },

          id: "1317642",
          name: "李丹",
          job: '副总裁'
        },
        {
          lt: "https://movie.douban.com/celebrity/1317642/",
          avatars: {
            large: "https://img1.doubanio.com/img/celebrity/large/40719.jpg",
            medium: "http://static.fangjinsuo.com/img/fjs/about/about-14.png",
            small: "https://img1.doubanio.com/img/celebrity/small/40719.jpg",
          },

          id: "1317642",
          name: "白雪辉",
          job: '副总裁'
        },
        {
          lt: "https://movie.douban.com/celebrity/1317642/",
          avatars: {
            large: "https://img1.doubanio.com/img/celebrity/large/40719.jpg",
            medium: "http://static.fangjinsuo.com/img/fjs/about/about-17.png",
            small: "https://img1.doubanio.com/img/celebrity/small/40719.jpg",
          },

          id: "1317642",
          name: "张敏",
          job: '副总裁'
        },
        {
          lt: "https://movie.douban.com/celebrity/1317642/",
          avatars: {
            large: "https://img1.doubanio.com/img/celebrity/large/40719.jpg",
            medium: "http://static.fangjinsuo.com/img/fjs/about/about-15.png",
            small: "https://img1.doubanio.com/img/celebrity/small/40719.jpg",
          },

          id: "1317642",
          name: "冯华",
          job: '副总裁'
        },
      ]
      
    }
  },
  navToArticle(event) {
    //let str = dealUrl.getUrlTypeId(event);
    wx.navigateTo({
      url: '../article-page/article-page',
      success: (res) => { },
      fail: (err) => {
        console.log(err)
      }
    });
  },
  navToProduct(event) {
    //let str = dealUrl.getUrlTypeId(event);
    wx.navigateTo({
      url: '../product/productdetail/productdetail',
      success: (res) => { },
      fail: (err) => {
        console.log(err)
      }
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    //推荐频道 热门歌单
    /*
    util.getRecommend(function (data) {
      console.log(data.data.slider);
      wx.hideLoading();
      that.setData({ slider: data.data.slider, radioList: data.data.radioList, songList: data.data.songList });
    });*/
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  // 导航栏操作
  onNavbarTap: function (ev) {
    this.setData({ currentTab: ev.currentTarget.dataset.index });
  },
})
