import {createSlice} from "@reduxjs/toolkit"

export const friendSlice=createSlice(
  {
    name:'friends',
    initialState:{
      friendsarray:["brk.png","mat.png"],
      friendtopay:[]
    },
    reducers:{
      addtoarray:(state,action)=>{
        state.friendtopay=[...state.friendtopay,action.payload];
      },
      emptyarray:(state,action)=>{
        state.friendtopay=[];
      }
    }

  }
);
export const cardSlice=createSlice(
  {
    name:'card',
    initialState:{
      cards:[
        {
          
            balance:3000,
            holder:"Trish Una",
            valid_thru:"12/27",
            number:"1234 \u00A0\u00A0\u00A05678\u00A0\u00A0\u00A0 9100",
            bank:"Chase Bank",
            pin:"3119",
            blocked:false,
          
        },
        {
          balance:2340,
          holder:"Trish Una",
          valid_thru:"12/25",
          number:"1029 \u00A0\u00A0\u00A03948 \u00A0\u00A0\u00A05790",
          bank:"Bank Of America",
          pin:"3118",
          blocked:false,

        },
        {
          balance:5000,
          holder:"Trish Una",
          valid_thru:"12/25",
          number:"1022 \u00A0\u00A0\u00A03898 \u00A0\u00A0\u00A09087",
          bank:"Wells Fargo",
          pin:"3117",
          blocked:false,

        }
      ],
      addCardStatus: null, 
    },
    reducers:{

      reduceTotalBalance: (state, action) => {
        state.balance -= action.payload;
      },
      addCard: (state, action) => {
        if (state.cards.length < 3) {
          state.cards.push(action.payload);
          state.addCardStatus = 'success'; // indicate success
        } else {
          state.addCardStatus = 'failure'; // indicate failure
        }
      },


      resetAddCardStatus: (state) => {
        state.addCardStatus = null; // reset status
      },
      reduceBalance: (state, action) => {
        const { cardNumber, amount } = action.payload;
        const selectedCard = state.cards.find(card => card.number.replace(/\s/g, '') === cardNumber);
  
        if (selectedCard) {
          selectedCard.balance -= amount;
        }
      },

    }
  },
  
);
export const expenseSlice=createSlice(
  {
    name:'expenses',
    initialState:{
      expense:{
        housing:1000,
        grocery:500,
        transportation:400,
        utilities:600,
        entertainment:300,
        personalcare:250,
        misc:400

      },

      fixedexpenses:[
        {desc:"spotify",
        amount:"$14.99",
        duration:"1 mo",
        },
        {desc:"netflix",
        amount:"$17.99",
        duration:"1 mo",
        },
      ]
    },
    reducers: {
      // Action to add or update an expense
      // updateExpense: (state, action) => {
      //   const { category, amount } = action.payload;
      //   state.expenses[category] = amount;
      // },
  
      // Action to calculate and update the total expense
      // calculateTotalExpense: (state) => {
      //   const totalExpense = Object.values(state.expenses).reduce((acc, val) => acc + val, 0);
      //   state.totalExpense = totalExpense;
      //   return totalExpense;
      // },
    },

  }
);
export const financeSlice = createSlice(
  {
    name: 'finance',
    initialState: {
      totalincome: 6000,
      totalexpenses: 7400,
      totalbalance:17803,
      totalsavings:0,
      income: [],
      expenses: [],
    },
    reducers: {
      setTotalIncome: (state, action) => {
        state.totalIncome = action.payload;
      },
      setTotalExpenses: (state, action) => {
        state.totalExpenses = action.payload;
      },
      addIncome: (state, action) => {
        state.income.push(action.payload);
      },
      addExpense: (state, action) => {
        state.expenses.push(action.payload);
      },
    },
  },
);
export const loanSlice=createSlice(
  {
    name:'loan',
    initialState:{
      loanst:{
        totalloan:50000,
      loanrepaid:28000

      },
      currloanarray:[
        {
          desc:"personal loan",
          loanmoney:"$ 12000",
          duration:"1y",
          rate:"10%",
          installment:"$1,014.69."

        },
        {
          desc:"personal loan",
          loanmoney:"$ 4000",
          duration:"6 mo",
          rate:"8%",
          installment: "$ 675.17"

        },
      ],
      loanobj:{
        desc:" ",
        loanmoney:" ",
        duration:" ",
        rate:" ",
      }

      
    },


    reducers: {
      applyForLoan: (state, action) => {
        state.currloanarray.push(action.payload);
      },
      setLoanObj: (state, action) => {
        state.loanobj = { ...state.loanobj, ...action.payload };
      },
      
  }
  }
);
export const transactionSlice=createSlice(
  {
  name:"alltrans",
  initialState:{
    alltrans:[
      {
      desc:"personal",
      card :"1234 5678 9087",
      amt:"$ 500",
      date:"12/3/2024",
      transid: "VRDSTUY5FGV"
    },
    {
      desc:"bill",
      card :"3287 0971 2345",
      amt:"$ 800",
      date:"2/9/2024",
      transid: "VRAUINBV"
  
    }
    ]
  },
  reducers:{
    addtoexpenses:(state,action)=>{
      state.alltrans=[...state.alltrans,action.payload];
    }

  }
}
);


export const {addtoarray,emptyarray}=friendSlice.actions;
export const { reduceTotalBalance,addCard,resetAddCardStatus,reduceBalance} = cardSlice.actions;
export const {addtoexpenses}=transactionSlice.actions
export const { calculateTotalExpense } = expenseSlice.actions;
export const { applyForLoan ,setLoanObj} = loanSlice.actions;
export const financeReducer = financeSlice.reducer;
export const friendReducer = friendSlice.reducer;
export const expenseReducer =expenseSlice.reducer;