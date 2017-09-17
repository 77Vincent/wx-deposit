//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    input: [{
      id: "deposit",
      title: "现存款",
      tips: "目前已有存款数目",
      placeholder: 0
    }, {
      id: "income",
      title: "平均月收入",
      placeholder: 0
    }, {
      id: "expense",
      title: "平均月支出",
      placeholder: 0
    }, {
      id: "investmentRate",
      title: "理财存款占比 (%)",
      placeholder: 100
    }, {
      id: "incomeIncreaseRate",
      title: "收入年增幅 (%)",
      placeholder: 0
    }, {
      id: "interestRate",
      title: "理财平均年利率 (%)",
      placeholder: 0
    }, {
      id: "period",
      title: "多少年后",
      placeholder: 0
    }],
    output: [{
      id: "deposit",
      title: "总存款 (含理财收入)"
    }, {
      id: "depositWithoutInterest",
      title: "总存款 (不含理财收入)"
    }, {
      id: "interest",
      title: "总理财收入"
    }, {
      id: "interestPro",
      title: "理财收入占总存款比例 (%)"
    }, {
      id: "expense",
      title: "总支出"
    }],
    tipsStatus: {
      deposit: true
    },
    done: true
  },
  userInput: {},
  getValue(e) {
    this.userInput[e.currentTarget.id] = e.detail.value === "" ? undefined : Number(e.detail.value);
  },
  calculate(d = 0, i = 0, e = 0, m = 100, r2 = 0, r1 = 0, n = 0) {

    r1 = r1 / 100;
    r2 = r2 / 100;
    m = m / 100;

    /**
     * Annual saving
     * @param {Number} years
     * @returns saving per year
     */
    const s = (n) => {
      return 12 * (i * Math.pow(r2 + 1, n - 1) - e);
    };

    const dr = (x, n) => {
      x = isNaN(x) ? 0 : x;

      const ep = Math.pow(10, n);
      return Math.round(x * ep) / ep;
    };

    let v = m * r1 + 1;
    let final = d;
    let ni = d;

    for (let ind = 1; ind <= n; ind++) {
      final = final * v + s(n);
      ni = ni + s(n);
    }

    return {
      deposit: Math.round(final),
      depositWithoutInterest: Math.round(ni),
      interest: Math.round(final - ni),
      interestPro: (dr((final - ni) / final, 4) * 100).toFixed(2),
      expense: n * 12 * e
    };
  },
  showTips(e) {
    console.log(e)
  },
  confirm() {
    let ui = this.userInput;

    this.setData({
      result: this.calculate(ui.deposit, ui.income, ui.expense, ui.investmentRate, ui.incomeIncreaseRate, ui.interestRate, ui.period),
      done: false,
    });
  },
  onLoad() {
    this.data.input.map((v, i) => {
      this.data.tipsStatus[v.id] = true;
    });

    console.log(this.data.tipsStatus)
  }
});