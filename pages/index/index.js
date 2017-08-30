//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    input: [{
      id: "deposit",
      title: "现存款"
    }, {
      id: "income",
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
  calculate(d, i, e, c, r, p) {
    let dep = d;
    
    for (let ind = 0; ind < p; ind++) {
      dep = dep * (1 + r / 100) + i - e;
    }
    
    return {
      deposit: dep,
      interest: dep - d
    };
  },
  confirm() {
    let ui = this.userInput;
    
    this.setData({
      result: this.calculate(ui.deposit, ui.income, ui.expense, ui.incomeIncreaseRate, ui.interestRate, ui.period);
    });
  },
  onLoad() {
  }
});
