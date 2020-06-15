var app = getApp()
const db = wx.cloud.database()

Page( {
 data: {
  /**
    * 页面配置
    */
  winWidth: 0,
  winHeight: 0,
  // tab切换
  currentTab: 0,
  title_tabs:[
    {
      id:0,
      value:"胜率排名",
      isActive:true
    },
    {
      id:1,
      value:"登场率排名",
      isActive:false
    }
  ],
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
  ],
  top_winrate_list:[],
  jug_winrate_list:[],
  mid_winrate_list:[],
  bot_winrate_list:[],
  sup_winrate_list:[],

  top_pickrate_list:[],
  jug_pickrate_list:[],
  mid_pickrate_list:[],
  bot_pickrate_list:[],
  sup_pickrate_list:[]
 },

 getData_TopList_winRate(num=15,page=0) {
   wx.cloud.callFunction({
     name:"getList_rate",
     data:{
       num:num,
       page:page,
       database:"top_list",
       rate_sequence: 'winrate'
     }
   }).then(res=>{
    var oldData = this.data.top_winrate_list
    var newData = oldData.concat(res.result.data)
    this.setData({
      top_winrate_list:newData
    })
  })
 },
 getData_JugList_winRate(num=15,page=0) {
  wx.cloud.callFunction({
    name:"getList_rate",
    data:{
      num:num,
      page:page,
      database:"jug_list",
      rate_sequence: 'winrate'
    }
  }).then(res=>{
   var oldData = this.data.jug_winrate_list
   var newData = oldData.concat(res.result.data)
   this.setData({
     jug_winrate_list:newData
   })
 })
},
getData_MidList_winRate(num=15,page=0) {
  wx.cloud.callFunction({
    name:"getList_rate",
    data:{
      num:num,
      page:page,
      database:"mid_list",
      rate_sequence: 'winrate'
    }
  }).then(res=>{
   var oldData = this.data.mid_winrate_list
   var newData = oldData.concat(res.result.data)
   this.setData({
     mid_winrate_list:newData
   })
 })
},
getData_BotList_winRate(num=15,page=0) {
  wx.cloud.callFunction({
    name:"getList_rate",
    data:{
      num:num,
      page:page,
      database:"bot_list",
      rate_sequence: 'winrate'
    }
  }).then(res=>{
   var oldData = this.data.bot_winrate_list
   var newData = oldData.concat(res.result.data)
   this.setData({
     bot_winrate_list:newData
   })
 })
},
getData_SupList_winRate(num=15,page=0) {
  wx.cloud.callFunction({
    name:"getList_rate",
    data:{
      num:num,
      page:page,
      database:"sup_list",
      rate_sequence: 'winrate'
    }
  }).then(res=>{
   var oldData = this.data.sup_winrate_list
   var newData = oldData.concat(res.result.data)
   this.setData({
     sup_winrate_list:newData
   })
 })
},
getData_TopList_pickRate(num=15,page=0) {
  wx.cloud.callFunction({
    name:"getList_rate",
    data:{
      num:num,
      page:page,
      database:"top_list",
      rate_sequence: 'pickrate'
    }
  }).then(res=>{
   var oldData = this.data.top_pickrate_list
   var newData = oldData.concat(res.result.data)
   this.setData({
     top_pickrate_list:newData
   })
 })
},
getData_JugList_pickRate(num=15,page=0) {
 wx.cloud.callFunction({
   name:"getList_rate",
   data:{
     num:num,
     page:page,
     database:"jug_list",
     rate_sequence: 'pickrate'
   }
 }).then(res=>{
  var oldData = this.data.jug_pickrate_list
  var newData = oldData.concat(res.result.data)
  this.setData({
    jug_pickrate_list:newData
  })
})
},
getData_MidList_pickRate(num=15,page=0) {
 wx.cloud.callFunction({
   name:"getList_rate",
   data:{
     num:num,
     page:page,
     database:"mid_list",
     rate_sequence: 'pickrate'
   }
 }).then(res=>{
  var oldData = this.data.mid_pickrate_list
  var newData = oldData.concat(res.result.data)
  this.setData({
    mid_pickrate_list:newData
  })
})
},
getData_BotList_pickRate(num=15,page=0) {
 wx.cloud.callFunction({
   name:"getList_rate",
   data:{
     num:num,
     page:page,
     database:"bot_list",
     rate_sequence: 'pickrate'
   }
 }).then(res=>{
  var oldData = this.data.bot_pickrate_list
  var newData = oldData.concat(res.result.data)
  this.setData({
    bot_pickrate_list:newData
  })
})
},
getData_SupList_pickRate(num=15,page=0) {
 wx.cloud.callFunction({
   name:"getList_rate",
   data:{
     num:num,
     page:page,
     database:"sup_list",
     rate_sequence: 'pickrate'
   }
 }).then(res=>{
  var oldData = this.data.sup_pickrate_list
  var newData = oldData.concat(res.result.data)
  this.setData({
    sup_pickrate_list:newData
  })
})
},

 onLoad: function() {
  var that = this;
  /**
   * 获取系统信息
   */
  wx.getSystemInfo( {
   success: function( res ) {
    that.setData( {
     winWidth: res.windowWidth,
     winHeight: res.windowHeight
    });
   }
  });
  that.getData_TopList_winRate();
  that.getData_JugList_winRate();
  that.getData_MidList_winRate();
  that.getData_BotList_winRate();
  that.getData_SupList_winRate();
  that.getData_TopList_pickRate();
  that.getData_JugList_pickRate();
  that.getData_MidList_pickRate();
  that.getData_BotList_pickRate();
  that.getData_SupList_pickRate();
 },

 onReachBottom: function() {
  let {tabs} = this.data;
  
  if (this.data.title_tabs[0].isActive && tabs[0].isActive)  {
    var page = this.data.top_winrate_list.length
    this.getData_TopList_winRate(15,page)
  }
  else if (this.data.title_tabs[0].isActive && tabs[1].isActive)  {
    var page = this.data.jug_winrate_list.length
    this.getData_JugList_winRate(15,page)
  }
  else if (this.data.title_tabs[0].isActive && tabs[2].isActive)  {
    var page = this.data.mid_winrate_list.length
    this.getData_MidList_winRate(15,page)
  }
  else if (this.data.title_tabs[0].isActive && tabs[3].isActive)  {
    var page = this.data.bot_winrate_list.length
    this.getData_BotList_winRate(15,page)
  }
  else if (this.data.title_tabs[0].isActive && tabs[4].isActive)  {
    var page = this.data.sup_winrate_list.length
    this.getData_SupList_winRate(15,page)
  }
  else if (this.data.title_tabs[1].isActive && tabs[0].isActive)  {
    var page = this.data.top_pickrate_list.length
    this.getData_TopList_pickRate(15,page)
  }
  else if (this.data.title_tabs[1].isActive && tabs[1].isActive)  {
    var page = this.data.jug_pickrate_list.length
    this.getData_JugList_pickRate(15,page)
  }
  else if (this.data.title_tabs[1].isActive && tabs[2].isActive)  {
    var page = this.data.mid_pickrate_list.length
    this.getData_MidList_pickRate(15,page)
  }
  else if (this.data.title_tabs[1].isActive && tabs[3].isActive)  {
    var page = this.data.bot_pickrate_list.length
    this.getData_BotList_pickRate(15,page)
  }
  else if (this.data.title_tabs[1].isActive && tabs[4].isActive)  {
    var page = this.data.sup_pickrate_list.length
    this.getData_SupList_pickRate(15,page)
  }
  
},
 

 handleTitleTabsItemChange(e) {
  const {index} = e.detail;
  let {title_tabs} = this.data;
  title_tabs.forEach((v,i) => i === index?v.isActive=true:v.isActive=false);
  this.setData({title_tabs})

  //console.log(this.data.winHeight)
 },

 handleTabsItemChange(e) {
  const {index} = e.detail;
  let {tabs} = this.data;
  tabs.forEach((v,i) => i === index?v.isActive=true:v.isActive=false);
  this.setData({tabs})

  //console.log(this.data.winHeight)
 },

})