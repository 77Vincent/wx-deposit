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
      id: "incomeIncreaseRate",
      title: "年收入增幅(%)",
      line: true,
    }, {
      id: "interestRateY",
      title: "理财平均年利率(%)",
    }, {
      id: "interestRateM",
      title: "理财平均月利率(%)",
      line: true,
    }, {
      id: "periodY",
      title: "存多少年"
    }, {
      id: "periodM",
      title: "存多少月"
    }],
    output: [{
      id: "deposit",
      title: "总存款"
    }, {
      id: "interest",
      title: "总利息"
    }],
  },
  convert(e) {
    if (e.currentTarget.id === "interestRateY") {
      this.setData({
        jjj: e.detail.value 
      });
    }
  },
  userInput: {},
  getValue(e) {
    this.userInput[e.currentTarget.id] = e.detail.value;
  },
  calculate() {
    let de = this.userInput.deposit;
    let sa = this.userInput.save;
    let ex = this.userInput.expense;
    let iir = this.userInput.incomeIncreaseRate;
    let iry = this.userInput.interestRateY;
    let irm = this.userInput.interestRateM;
    let py = this.userInput.periodY;
    let pm = this.userInput.periodM;

    for (let i = 0; i < pm; i++) {
      de = de * (1 + irm / 100) + sa;
    }

    this.setData({
      result: {
        deposit: de,
        interest: de - this.userInput.deposit,
      }
    });
  },
  onLoad() {
  }
});