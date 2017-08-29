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
      id: "investmentRate",
      title: "理财存款占比(%)",
    }, {
      id: "incomeIncreaseRate",
      title: "收入增幅(%)",
      switch: true,
    }, {
      id: "interestRate",
      title: "理财平均利率(%)",
      switch: true
    }, {
      id: "period",
      title: "存多久",
      switch: true,
    }],
    output: [{
      id: "deposit",
      title: "总存款"
    }, {
      id: "interest",
      title: "总利息"
    }],
  },
  userInput: {},
  getValue(e) {
    this.userInput[e.currentTarget.id] = e.detail.value;
  },
  calculate() {
    let dep = this.userInput.deposit;
    let sav = this.userInput.save;
    let exp = this.userInput.expense;
    let iir = this.userInput.incomeIncreaseRate;
    let ir = this.userInput.interestRate;
    let pm = this.userInput.period;

    for (let i = 0; i < pm; i++) {
      dep = dep * (1 + ir / 100) + sav - exp;
    }

    this.setData({
      result: {
        deposit: dep,
        interest: dep - this.userInput.deposit,
      }
    });
  },
  onLoad() {
  }
});