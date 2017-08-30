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
  calculate(dep, inc, exp, mr, iir, ir, per) {
    dep = dep ? dep : 0;
    inc = inc ? inc : 0;
    exp = exp ? exp : 0;
    mr = mr ? mr : 100;
    iir = iir ? iir : 0;
    ir = ir ? ir : 0;
    per = per ? per : 0;

    let d = dep;
    
    for (let ind = 0; ind < per * 12; ind++) {
      d = d * (1 * mr/100 + ir/100) + inc - exp;
    }

    console.log(d)
    
    return {
      deposit: d,
      interest: d - dep 
    };
  },
  confirm() {
    let ui = this.userInput;
    console.log(ui)
    
    this.setData({
      result: this.calculate(ui.deposit, ui.income, ui.expense, ui.investmentRate, ui.incomeIncreaseRate, ui.interestRate, ui.period)
    });
  },
  onLoad() {
  }
});
