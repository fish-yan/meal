
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
String.prototype.format = function (toFmt) {
  var str = this.replace(/[^0-9]/ig,"");
  var y = "0000", M = "00", d = "00", h = "00", m = "00", s = "00"
  if (str.length >= 4) {
    y = str.slice(0,4)
  }
  if (str.length >= 6) {
    M = str.slice(4,6)
  }
  if (str.length >= 8) {
    d = str.slice(6,8)
  }
  if (str.length >= 10) {
    h = str.slice(8,10)
  }
  if (str.length >= 12) {
    m = str.slice(10,12)
  }
  if (str.length >= 14) {
    s = str.slice(12,14)
  }
  toFmt = toFmt.replace("yyyy", y)
  toFmt = toFmt.replace("MM", M)
  toFmt = toFmt.replace("dd", d)
  toFmt = toFmt.replace("hh", h)
  toFmt = toFmt.replace("mm", m)
  toFmt = toFmt.replace("ss", s)
  return toFmt;
}

String.prototype.isEmpty = function () {
  return this == "" || this == null
}

export default {
  get isAndroid() {
    let u = window.navigator.userAgent;
    return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
  },
  get isIOS() {
    let u = window.navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  },
  getUrlParams() {
    let suffex = window.location.search.substring(1);
    if (suffex.length == 0) {
      return {}
    }
    let items = suffex.split("&")
    var args = {}
    items.forEach(item => {
      let query = item.split("=")
      let key = decodeURIComponent(query[0])
      let value = decodeURIComponent(query[1])
      args[key] = value
    })
    return args;
  },
  getStatusBarHeight() {
    var h = 0;
    if (this.isAndroid) {
      if ((window.screen.height - 1) / window.screen.width > 16 / 9) {
        //刘海屏
        h = Math.max((window.screen.height - window.innerHeight), 40);
      }
    } else if (this.isIOS) {
      if ((window.screen.height - 1) / window.screen.width > 16 / 9) {
        //刘海屏
        h = 40;
      }
    }
    return Math.max(h, 20);
  },
}