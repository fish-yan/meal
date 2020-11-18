import utils from "./utils"

export default {
    uploadImg(type) {
        if (utils.isIOS) {
            uploadImg(type)
        } else if (utils.isAndroid) {
            window.android.uploadImg(type)
        }
    },
    downloadImg(url) {
        if (utils.isIOS) {
            saveWxTimeline(url)
        } else if (utils.isAndroid) {
            window.android.saveWxTimeline(url)
        } 
    },
    closeWebview() {
        if (utils.isIOS) {
            WebViewJavascriptBridge.callCloseWebview()
        } else if (utils.isAndroid) {
            window.android.callCloseWebview()
        } 
    }
}