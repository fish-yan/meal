import config from '../config/index'

export default {
    address: {
        province: {
            code: "",
            name: "",
        },
        city: {
            code: "",
            name: "",
        },
        district: {
            code: "",
            name: "",
        },
        des: "",
        date: null
    },
    init() {
        var url =
            "https://webapi.amap.com/maps?v=1.4.15&key=a7be23a4293a3abed4db32039cf9c9ed";
        var jsapi = document.createElement("script");
        jsapi.charset = "utf-8";
        jsapi.src = url;
        document.head.appendChild(jsapi);
    },
    getLocation(onComplete, onError) {
        AMap.plugin("AMap.Geolocation", function () {
            var geolocation = new AMap.Geolocation({
                timeout: 10000,
                maximumAge:3600000,
            });
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, "complete", onComplete);
            AMap.event.addListener(geolocation, "error", onError);
        });
    },
    getAddress(onComplete, onError = function () { }) {
        
        if (this.address.date != null) {
            let oldDate = Date.parse(this.address.date)
            let newDate = Date.parse(new Date())
            let duration = Math.abs(newDate - oldDate) / 1000 / 60 / 60
            
            if (duration < 1 && 
                this.address.province.name != null &&
                this.address.province.name != "" &&
                this.address.city.name != null &&
                this.address.city.name != "" &&
                this.address.district.name != null &&
                this.address.district.name != "" &&
                this.address.des != null &&
                this.address.des != "") { // 间隔大于1小时才会定位，防止频繁定位
                onComplete(this.address)
                return
            }
        }
        let that = this
        AMap.plugin("AMap.Geocoder", function () {
            var geocoder = new AMap.Geocoder();
            that.getLocation(
                function (data) {
                    var lnglat = [data.position.lng, data.position.lat]
                    geocoder.getAddress(lnglat, function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            let data = result.regeocode.addressComponent
                            var des = result.regeocode.formattedAddress.replace(data.country, "")
                            des = des.replace(data.province, "")
                            des = des.replace(data.district, "")
                            des = des.replace(data.township, "")
                            let citys = ["北京市", "上海市", "天津市", "重庆市"]
                            if (citys.indexOf(data.province) > -1) {
                                data.city = data.province
                            }
                            let address = {
                                province: {
                                    code: "",
                                    name: data.province
                                },
                                city: {
                                    code: "",
                                    name: data.city
                                },
                                district: {
                                    code: "",
                                    name: data.district
                                },
                                des: des
                            }
                            address.date = new Date()
                            that.address = address
                            onComplete(address)
                        } else {
                            onError("定位失败")
                        }
                    })
                },
                function (data) {
                    if (config.debug) {
                        let address = {
                            province: {
                                code: "",
                                name: "上海市"
                            },
                            city: {
                                code: "",
                                name: "上海市"
                            },
                            district: {
                                code: "",
                                name: "浦东新区"
                            },
                            des: "博成路52号鲁能国际中心B座"
                        }
                        address.date = new Date()
                        that.address = address
                       
                        onComplete(address)
                        return
                    } 
                    onError("定位失败")
                }
            )
        });
    }
}