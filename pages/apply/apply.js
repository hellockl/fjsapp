var app = getApp()
var maxTime = 30
var currentTime = maxTime //倒计时的事件（单位：s）  
var interval = null
var hintMsg = null // 提示  

var check = require("../../utils/util.js")


Page({
  data: {
    array: ['上海', '北京', '深圳', '杭州', '其他'],
    objectArray: [
      {
        id: 0,
        name: '上海'
      },
      {
        id: 1,
        name: '北京'
      },
      {
        id: 2,
        name: '深圳'
      },
      {
        id: 3,
        name: '杭州'
      },
      {
        id: 3,
        name: '其他'
      }
    ],
    index: 0,
    amount: null,
    has_house: null,
    phone: null,
    code: null,
    err_msg: null,
    time: -1
  },
  onLoad: function () {
    var that = this
    that.setData({
      err_msg: null
    });
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  sendPhoneNum: function () {
    currentTime = this.data.time
    if (currentTime < 0) {
      var that = this
      if (!check.checkPhoneNum(that.data.phone)) {
        wx.showToast({
          title: '输入正确的手机号码',
          icon: 'loading',
          duration: 500
        })
        return false;
      } else {
        hotapp.onEvent("sendsms");//统计发送短信验证码的事件
        request.submitIdentifyCode(that.data.phone)
      }
      currentTime = maxTime
      interval = setInterval(function () {
        currentTime--
        that.setData({
          time: currentTime
        })

        if (currentTime <= 0) {
          currentTime = -1
          clearInterval(interval)
          that.setData({
            time: -1
          })
        }
      }, 1000)

    } else {
      wx.showToast({
        title: '短信已发到您的手机，请稍后重试!',
        icon: 'loading',
        duration: 700
      })
    }
  },
  input_amount: function (e) {
    this.setData({
      amount: e.detail.value
    })
  },
  input_phoneNum: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  radio_house: function (e) {
    this.setData({
      has_house: e.detail.value
    })
  },
  input_code: function (e) {
    this.setData({
      code: e.detail.value
    })
  },
  formSubmit: function () {



    if (!check.checkIsNotNull(this.data.amount)) {
      wx.showToast({
        title: '输入贷款金额',
        icon: 'loading',
        duration: 500
      })
      return false;
    }
    if (!check.checkIsNotNull(this.data.has_house)) {
      wx.showToast({
        title: '选择有无房产',
        icon: 'loading',
        duration: 500
      })
      return false;
    }
    if (!check.checkPhoneNum(this.data.phone)) {
      wx.showToast({
        title: '输入正确的手机号码',
        icon: 'loading',
        duration: 500
      })
      return false;
    }
    if (!check.checkIsNotNull(this.data.code)) {
      wx.showToast({
        title: '输入验证码',
        icon: 'loading',
        duration: 500
      })
      return false;
    }
    hotapp.onEvent("submitform");//统计提交表单的事件
    //信息完整提交表单
    request.submitform(this.data);
  },
  makephonecall: function () {
    //hotapp.onEvent("callphone")
    wx.makePhoneCall({
      phoneNumber: '4008102999'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '房金所贷款小程序',
      desc: '房屋抵押贷款',
      path: '/pages/index/index'
    }
  }
})
