// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"上单",
        isActive:true
      },
      {
        id:1,
        value:"打野",
        isActive:false
      },
      {
        id:2,
        value:"中单",
        isActive:false
      },
      {
        id:3,
        value:"下路",
        isActive:false
      },
      {
        id:4,
        value:"辅助",
        isActive:false
      },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  handleTabsItemChange(e) {
    const {index} = e.detail;
    let {tabs} = this.data;
    tabs.forEach((v,i) => i === index?v.isActive=true:v.isActive=false);
    this.setData({tabs})
  }
})