//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    input: [{
      id: "deposit",
      title: "现存款"
    }, {
      id: "save",
      title: "平均月收入"
    }, {
      id: "expense",
      title: "平均月支出"
    }, {
      id: "incomeRate",
      title: "年收入增幅"
    }, {
      id: "interestRateY",
      title: "理财平均年利率"
    }, {
      id: "interestRateM",
      title: "理财平均月利率"
    }, {
      id: "periodY",
      title: "存多少年"
    }, {
      id: "periodM",
      title: "存多少月"
    }]
  },
  userInput: {},
  getValue(e) {
    this.userInput[e.currentTarget.id] = e.detail.value;
  },
  calculate() {
    console.log(this.userInput)
  },
  onLoad() {
    var that = this;

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      });
    });
  }
});