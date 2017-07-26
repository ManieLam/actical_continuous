//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  acticalData:{
    //全局数据
    // id：0-200
    list_s_tp:[
        {id:0,title:'测试简单',total:5,curPart:1},
        {id:200,title:'十五字讲故事',total:5,curPart:1},
        {id:199,title:'这是一个恐怖与灵异并存，血腥与浪漫交叉的故事',total:5,curPart:1},
        {id:198,title:'校园奇遇',total:5,curPart:2},
        {id:197,title:'今天我去同学会了',total:5,curPart:1},
        {id:196,title:'拖延症的故事',total:5,curPart:5},
        {id:195,title:'一个普通的失败人士',total:5,curPart:1},
        {id:194,title:'走在相亲的大路上',total:5,curPart:1},
        {id:193,title:'他来听我的演唱会',total:5,curPart:1},
        {id:192,title:'狗和猫的故事',total:5,curPart:1},
        {id:191,title:'我爱双喜',total:5,curPart:1},
        {id:190,title:'我是一个接地气的富二代',total:5,curPart:1},
        {id:189,title:'一代微商',total:5,curPart:1},
        {id:188,title:'我的奇葩同事',total:5,curPart:1},
        {id:187,title:'女人和大姨妈的故事',total:5,curPart:1},
        {id:186,title:'一条姨妈巾引发的血案',total:5,curPart:1},
    ],
    //id:201-300
    // list_h_tp:[
    //     {id:1,title:'测试困难',total:10,curPart:1},
    //     {id:300,title:'树欲静而风不止',total:10,curPart:1},
    //     {id:299,title:'富人出远门，分别按才干给了三个仆人一袋金币',total:10,curPart:1},
    //     {id:298,title:'都市传说',total:10,curPart:1},
    //     {id:297,title:'从前有个山洞',total:10,curPart:2},
    //     {id:296,title:'粒子转移',total:10,curPart:1},
    // ],
    //id:301-500
    list_sf_tp:[],
    list_s_dtl:{
      id:200,
      title:'十五字讲故事',
      total:5,
      curPart:1,
      describe:'从前有个孩子叫做二狗，但是他只有7秒的记忆',
      partsDtl:[{part:1,dtl:'每天在家最重要的事就是找主人。'},
                ]
    }
  }
})