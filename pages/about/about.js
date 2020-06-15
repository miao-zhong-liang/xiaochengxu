const db = wx.cloud.database()

Page({
  data: {
    allHeroes_list:[],
  
  },

  getData_AllList(num=15,page=0) {
    wx.cloud.callFunction({
      name:"getAllList",
      data:{
        num:num,
        page:page
      }
    }).then(res=>{
      var oldData = this.data.allHeroes_list
      var newData = oldData.concat(res.result.data)
      this.setData({
        allHeroes_list:newData
      })
    })
    
  },

  onLoad: function(options) {
    this.getData_AllList()
  },

  onReachBottom: function() {
    var page = this.data.allHeroes_list.length
    this.getData_AllList(15,page)
  },

  onTouch: function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(index)
    wx.navigateTo({
      url: '../detail/detail?alias=' + test,
    })
    console.log(test)
   }
})