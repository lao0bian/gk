const app = getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/home/home",
      iconPath: "/images/icon/home.png",
      selectedIconPath: "/images/icon/home1.png",
      text: "首页",
      isSpecial: false
    }, 
      {
        pagePath: "/pages/home/home",
        iconPath: "/images/icon/home-analyze.png",
        selectedIconPath: "/images/icon/home-analyze1.png",
        text: "智能分析",
        isSpecial: false
      },
     
    {
        pagePath: "/pages/home/home",
        iconPath: "/images/icon/home-voice.png",
        selectedIconPath: "/images/icon/home-voice1.png",
      text: "",
      isSpecial: true
    },
      {
        pagePath: "/pages/home/home",
        iconPath: "/images/icon/home-find.png",
        selectedIconPath: "/images/icon/home-find1.png",
        text: "发现",
        isSpecial: false
      },
     {
        pagePath: "/pages/mine/mine",
        iconPath: "/images/icon/home-mine.png",
        selectedIconPath: "/images/icon/home-mine1.png",
      text: "我的",
      isSpecial: false
    }],
    //适配IphoneX的屏幕底部横线
    isIphoneX: app.globalData.isIphoneX
  },
  attached() {},
  methods: {
    switchTab(e) {
      const dataset = e.currentTarget.dataset
      const path = dataset.path
      const index = dataset.index
      //如果是特殊跳转界面
      if (this.data.list[index].isSpecial) {
        wx.navigateTo({
          url: path
        })
      } else {
        //正常的tabbar切换界面
        wx.switchTab({
          url: path
        })
        this.setData({
          selected: index
        })
      }
    }
  }
})