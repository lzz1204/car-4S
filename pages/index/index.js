//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    src: "../../images/logo.jpg",
    array:[
      { src1:"../../images/01.jpg",h:"718 Cayman",title:"以运动之名",id:"0001"},
      { src1: "../../images/02.jpg", h: "新款 911 GTS", title: "天性不羁", id: "0002" },
      { src1: "../../images/03.jpg", h: "全新 Panamera", title: "一往无前", id: "0003"},
      { src1: "../../images/04.jpg", h: "Macan Turbo", title: "激情澎湃", id: "0004" },
    ]

  },
  
  //事件处理函数
  bindViewTap: function() {
   
  },
  
  onLoad: function (event) {
    console.log(event);
  },
  Contact:function(event) {
    console.log(event);
    wx: wx.switchTab({
      url: '../show/show',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  handleproduct:function(event){
    console.log(event);
    let str = event.target.dataset.id;
    console.log("1111", str)
    wx:wx.navigateTo({
      url: '../product/product?id='+str,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
   
})
