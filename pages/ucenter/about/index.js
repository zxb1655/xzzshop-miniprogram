const app = getApp()

Page({
    data: {
        info: {}
    },
    onLoad: function () {
        this.setData({
            info: app.globalData.info
        })
    },
})
