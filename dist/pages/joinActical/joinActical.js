// pages/joinGame/joinGame.js
var app = getApp()
Page({
  data:{
    list_s_dtl:app.acticalData.list_s_dtl,
    dtl_len:app.acticalData.list_s_dtl.partsDtl.length,
    isNoEnd:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.info(this.data.list_s_dtl);
  },
  submitPart(e){
    var that = this;
    const nText = e.detail.value.newtext;
    const dtl =  that.data.list_s_dtl;
    const partsDtl =  that.data.list_s_dtl.partsDtl;
    const nlen_dtl = partsDtl.length+1;
    partsDtl.push({part:nlen_dtl,dtl:nText});
    if(nlen_dtl<=dtl.total){
       that.setData({
          "list_s_dtl.partsDtl":partsDtl,
          "list_s_dtl.curPart":nlen_dtl,
          dtl_len:nlen_dtl,
          textValue:""
        })
      
    }
    if(nlen_dtl>=dtl.total){
      that.setData({
        isNoEnd:false
      })
    }
  },
 
})