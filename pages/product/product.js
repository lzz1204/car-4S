// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      { xing: "718 Cayma", power: "331KW(450hp)/6,500rp", speed: "3.7s", km: "310km/h", oil: "8.", prize: "1,610,000元，含增值", id: "0001", src1: "../../images/01.jpg" },
      { xing: "718 Cayma", power: "331KW(450hp)/6,500rp", speed: "3.7s", km: "310km/h", oil: "8.", prize: "1,610,000元，含增值", id: "0002", src1: "../../images/02.jpg" },
      { xing: "718 Cayma", power: "331KW(450hp)/6,500rp", speed: "3.7s", km: "310km/h", oil: "8.", prize: "1,610,000元，含增值", id: "0003", src1: "../../images/03.jpg" },
      { xing: "718 Cayma", power: "331KW(450hp)/6,500rp", speed: "3.7s", km: "310km/h", oil: "8.", prize: "1,610,000元，含增值", id: "0004", src1: "../../images/04.jpg" },
    ],
    product:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option);
    const str = option.id;
    wx.request({
      url: 'http://192.168.1.210:3000/manage/product/'+str,
      success: (res)=>{
        console.log("resss",res);
        this.setData({
          product: res.data.doc,
        })
      }
    })
    
   
  },
  handleContact: function(){
    wx.switchTab({
      url: '../show/show',
    })
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