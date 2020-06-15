const db = wx.cloud.database()

Page({
  data: {
    champ:""
  },

  onLoad: function(options) {
    var current_champ_name = options.alias.toLowerCase()
    console.log(current_champ_name)
    db.collection("detail_list").where({
      Champ_Name:current_champ_name
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        champ:res.data["0"]
      })
      console.log(res.data["0"])
    })
    
  }

  
})