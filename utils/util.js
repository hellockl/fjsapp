function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//获取推荐频道数据
function getRecommend(callback) {
  wx.request({
    url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: Date.now()
    },
    method: 'GET',
    header: { 'content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {
        var data = res.data;
        var songlist = data.data.songList;
        for (var i = 0; i < songlist.length; i++) {
          songlist[i].accessnum = formatWan(songlist[i].accessnum);
        }
        callback(data);
      }
    }
  })
}
// 检测是否有输入  
function checkIsNotNull(content) {
  return (content && content != null)
}

// function checkIsNotNull(content) {
//   if (content == '' || content == null){
//     return false;
//   }
//   return true;
// }

// 检测输入内容  
function checkPhoneNum(phoneNum) {
  if (!checkIsNotNull(phoneNum)) {
    return false
  }
  if (!(/^1[134578]\d{9}$/.test(phoneNum))) {
    return false
  }
  return true
}

module.exports = {
  formatTime: formatTime,
  getRecommend: getRecommend,
  checkIsNotNull: checkIsNotNull,
  checkPhoneNum: checkPhoneNum
}
