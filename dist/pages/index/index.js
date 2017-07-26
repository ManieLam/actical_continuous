//index.js
//获取应用实例
var app = getApp();
var that;
Page({
    data: {
        userInfo: {},
        currentTab: 0,
        winHeight: 0,
        dataCount: [{ counts: 220, title: 'Sections' }, { counts: 120, title: 'Finish' }, { counts: 2000, title: 'joins' }], //数据统计
        list_s_tp: {
            listTitle: app.acticalData.list_s_tp
        },
        list_h_tp: {
            listTitle: app.acticalData.list_h_tp
        },
        list_sf_tp: {
            listTitle: app.acticalData.list_sf_tp
        },

        navbar: ['简单点', '有点难', '完结番'],
        currentTab: 0, // 导航栏切换索引
    },
    onLoad: function() {
        that = this;
        that.getData();
        wx.getSystemInfo({
            //获取系统信息
            success: function(res) {
                that.setData({ winHeight: res.windowHeight });
            }
        });

    },
    onNavbarTap(e) {
        let index = e.currentTarget.dataset.index;
        this.setData({ currentTab: index });
        // index === 1 ? that.getCollectList() : that.getList();
    },

    getData() {
        // var that = this;
        // let list_s = that.data.list_s_tp.listTitle;
        // let list_h = that.data.list_h_tp.listTitle;
        // let list_sf = that.data.list_sf_tp.listTitle;
        let list_s = app.acticalData.list_s_tp;
        // let list_h = app.acticalData.list_h_tp;
        // let list_sf = app.acticalData.list_sf_tp;

        list_s.map(item => item.curPart == item.total ? item.text = '最终回' : item.text = "第" + item.curPart + "/" + item.total + "回");
        // list_h.map(item => item.curPart == item.total ? item.text = '最终回' : item.text = "第" + item.curPart + "/" + item.total + "回")
        // list_sf.map(item => item.curPart == item.total ? item.text = '最终回' : item.text = "第" + item.curPart + "/" + item.total + "回")
        that.setData({
            "list_s_tp.listTitle": list_s,
            //     "list_h_tp.listTitle": list_h,
            //     "list_sf_tp.listTitle": list_sf,
        })
    },

    bindChange: function(e) {
        // 滑动切换tab
        var that = this;
        that.setData({ currentTab: e.detail.current });
    },
    joinGames() {
        //参加游戏
        wx.navigateTo({
            url: '../joinActical/joinActical',

        })
    }

})