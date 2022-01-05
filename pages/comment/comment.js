var util = require("../../utils/util.js");
var api = require("../../config/api.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: 1,
    commentList: [],
  },
  handleNav: function (e) {
    this.setData({
      type: e.target.dataset.num,
    });
  },

  preview(event) {
    let index = event.currentTarget.dataset.index
    let current = event.currentTarget.dataset.url
    let list = this.data.commentList[index].image_url
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls: list// 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    util
      .request(api.GoodsComment, {
        id: options.goodsid,
      })
      .then(function (res) {
        that.setData({
          commentList: res.data,
        });
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
