// pages/home/pickzhuanye/test-begin/test-detail.js
var questionData = require("../questionData.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    C:0,
    E:0,
    I:0,
    R:0,
    S:0,
    A:0,
    index:0,
    realIndex:0,
    questionDetail: questionData.questionList[0].question,
    y: questionData.questionList[0].y_id,
    n: questionData.questionList[0].n_id
  },
  yes_next:function(){
    if (this.data.n == "c") {
      this.setData({ C: this.data.C + 1 })
    }
    if (this.data.n == "e") {
      this.setData({ E: this.data.E + 1 })
    }
    if (this.data.n == "i") {
      this.setData({ I: this.data.I + 1 })
    }
    if (this.data.n == "r") {
      this.setData({ R: this.data.R + 1 })
    }
    if (this.data.n == "s") {
      this.setData({ S: this.data.S + 1 })
    }
    if (this.data.n == "a") {
      this.setData({ A: this.data.A + 1 })
    }
    this.setData({
      index: this.data.index + 1,
      questionDetail: questionData.questionList[this.data.index+1].question,
      y: questionData.questionList[this.data.index+1 ].y_id,
      n: questionData.questionList[this.data.index+1 ].n_id
    })
    console.log(this.data.index)
    if (this.data.index == 60) {
      wx.redirectTo({
        url: '../test-result/test-result?C=' + this.data.C + '&E=' + this.data.E + '&I=' + this.data.I + '&R=' + this.data.R + '&S=' + this.data.S + '&A=' + this.data.A
      })
    }
 
  },
  no_next: function () {
    console.log(this.data.n)
    if (this.data.n == "c") {
      this.setData({ C: this.data.C + 1 })
    }
    if (this.data.n == "e") {
      this.setData({ E: this.data.E + 1 })
    }
    if (this.data.n == "i") {
      this.setData({ I: this.data.I + 1 })
    }
    if (this.data.n == "r") {
      this.setData({ R: this.data.R + 1 })
    }
    if (this.data.n == "s") {
      this.setData({ S: this.data.S + 1 })
    }
    if (this.data.n == "a") {
      this.setData({ A: this.data.A + 1 })
    }
    console.log(this.data.S)
    this.setData({
      index:this.data.index+1,
      questionDetail: questionData.questionList[this.data.index+1].question,
      y: questionData.questionList[this.data.index+1].y_id,
      n: questionData.questionList[this.data.index+1].n_id
    })
    if (this.data.index ==60) {
      wx.redirectTo({
        url: '../test-result/test-result?C=' + this.data.C + '&E=' + this.data.E + '&I=' + this.data.I + '&R=' + this.data.R + '&S=' + this.data.S + '&A=' + this.data.A
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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