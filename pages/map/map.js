// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../../images/address.png",
      id: 0,
      latitude: 34.043921,
      longitude: 113.869890,
      width: 50,
      height: 50,
      callout:{
        content:"许昌学院",
        color:"#FF0000DD",
        fontSize:50,
        display:"ALWAYS", 
      }
    }],
    polyline: [{
      points: [{
        longitude: 113.867921,
        latitude: 34.044165,
      }, {
          longitude: 113.868023,
          latitude: 34.041378,
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
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