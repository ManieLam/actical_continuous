// pages/user/user.js
var app = getApp()
Page({
  data:{
    userInfo: {},
    list_tp:{
      listTitle:[
        {id:0,title:'学校',text:"学校"},
        {id:1,title:'学号',text:"学号"},
        {id:2,title:'姓名',text:"姓名"},
        {id:3,title:'年级',text:"年级"},
        {id:4,title:'专业',text:"专业"},
        {id:5,title:'班级',text:"班级"}
        ]
    }
  },
   onLoad: function (option) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.info('userInfo',userInfo);
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})