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
      title: "收入年增幅(%)",
    }, {
      id: "interestRate",
      title: "理财平均年利率(%)",
    }, {
      id: "period",
      title: "存多久(年)",
    }],
    output: [{
      id: "deposit",
      title: "总存款(含利息)"
    }, {
      id: "interest",
      title: "总利息"
    }],
  },
  userInput: {},
  getValue(e) {
    this.userInput[e.currentTarget.id] = Number(e.detail.value);
  },
  calculate(dep=0, inc=0, exp=0, mr=100, iir=0, ir=0, per=0) {

    iir = iir / 100;
    ir = ir / 100;

    let iirA = 0;
    let irA = 0;
    let siA = 0;

    for (let ind = 0; ind < per; ind++) {
      iirA = iirA + Math.pow((1 + iir), ind);
      irA = irA + Math.pow(ir, ind + 1);

      if (ind === 0) {
        siA = 0;
      } else {
        siA = siA + (inc * Math.pow(iir, ind - 1) - exp) * Math.pow(ir, ind);
      }
    }

    let base = 12 * (inc * iirA - exp * per) + dep;
    let interest = dep * (irA + ir * (per - 1)) + 12 * siA;


    return {
      deposit: Math.round(base + interest),
      interest: Math.round(interest)
    };
  },
  confirm() {
    let ui = this.userInput;
    
    this.setData({
      result: this.calculate(ui.deposit, ui.income, ui.expense, ui.investmentRate, ui.incomeIncreaseRate, ui.interestRate, ui.period)
    });
  },
  onLoad() {
  }
});
