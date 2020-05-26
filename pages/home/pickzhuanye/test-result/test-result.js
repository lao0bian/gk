// pages/home/pickzhuanye/test-begin/test-result.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    C: 0,
    E: 0,
    I: 0,
    R: 0,
    S: 0,
    A: 0,
    typelist:[],
   
 
  },
/*   mySort: function(e) {
    //property 根据什么排序
    var property = e.currentTarget.dataset.property;
   
    var self = this;
    var typelist = self.data.typelist;
    var sortRule = false; // 正序倒序
    self.setData({
      typelist: typelist.sort(self.compare(property, sortRule))
    })
    //console.log(arr)
  }, */

  mySort: function() {
    //property 根据什么排序
    var property = "score";
   
    var self = this;
    var typelist = self.data.typelist;
    var sortRule = false; // 正序倒序
    self.setData({
      typelist: typelist.sort(self.compare(property, sortRule))
    })
    //console.log(arr)
  },
  compare:function (property, bol) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      if (bol) {
        return value1 - value2;
      } else {
        return value2 - value1;
      }
    }
  }
,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(options)
    this.setData({
      C: options.C - 0,
      E: options.E - 0,
      I: options.I - 0,
      R: options.R - 0,
      S: options.S - 0,
      A: options.A - 0,
      typelist: [
        {
          id: 1, score: options.C - 0, name: "C常规型", detail: "具有顺从、谨慎、保守、自控、服从、规律、坚毅、实际稳重、有效率、但缺乏想象力等特征，表现为 :\n1、喜欢传统性质的的职业或环境，避免艺术性质的职业或情境，会以传统的能力解决工作或其他方面的问题 。\n \n2、喜欢顺从、规律、有文书与数字能力，并重视商业与经济上的成就。",profession:"出纳、会计、秘书 。"},
        {
          id: 2, score: options.R - 0, name: "R实际型", detail: "具有顺从、坦率、谦虚、自然、坚毅、实际、有礼、害羞、稳健、节俭的特征，表现为 :\n1、喜爱实用性的职业或情境，以从事所喜好的活动，避免社会性的职业或情境 。\n2、用具体实际的能力解决工作及其他方面的问题，较缺乏人际关系方面的能力 。\n3、重视具体的事物，如金钱，权力、地位等 。\n", profession: " 工人 、农民 、土木工程师。" },
        { id: 3, score: options.I - 0, name: "I调研型", detail: "具有分析、谨慎、批评、好奇、独立、聪明、内向、条理、谦逊、精确、理发、保守的特征，表现为 :\n1、喜爱研究性的职业或情境，避免企业性的职业或情境\n2、用研究的能力解决工作及其他方面的问题，即自觉、好学、自信，重视科学，但缺乏领导方面的才能 \n ", profession: "科研人员 、数学、生物方面的专家 。" },
        {
          id: 4, score: options.E - 0, name: "E企业型", detail: "具有冒险、野心、独断、冲动、乐观、自信、追求享受、精力充沛、善于社交、获取注意、知名度等特征，表现为 :\n1、喜欢企业性质的的职业或环境，避免研究性质的职业或情境，会以企业方面的能力解决工作或其他方面的问题能力 。\n2、有冲动、自信、善社交、知名度高、有领导与语言能力，缺乏科学能力，但重视政治与经济上的成就。", profession:"推销员 、 政治家 、 企业家" },
        {
          id: 5, score: options.S - 0, name: "S社会型", detail: "具有合作、友善、慷慨、助人、仁慈、负责、圆滑、善社交、善解人意、说服他人、理想主义等特征，表现为 :\n1、喜爱社会型的职业或情境，避免实用性的职业或情境，并以社交方面的能力解决工作及其他方面的问题，但缺乏机械能力与科学能力\n2、喜欢帮助别人、了解别人，有教导别人的能力，且重视社会与伦理的活动与问题。", profession:"教师 、 牧师 、 辅导人员" },
        {
          id: 6, score: options.A - 0, name: "A艺术型", detail: "具有复杂、想象、冲动、独立、直觉、无秩序、情绪化、理想化、不顺从、有创意、富有表情、不重实际的特征，表现为 : \n1、喜爱艺术性的职业或情境，避免传统性的职业或情境\n2、富有表达能力和直觉、独立、具创意、不顺从（包括表演、写作、语言），并重视审美的领域 ", profession: "诗人 、艺术家 。" },
      
            ]
      
          })
         
          console.log(this.data.typelist)
         
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
    //进入页面自动排序
          this.mySort();
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