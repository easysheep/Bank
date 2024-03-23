import { configureStore } from "@reduxjs/toolkit";
import  {financeSlice, cardSlice, loanSlice, friendSlice,expenseSlice, transactionSlice } from '../slices/OneSlice'
const store=configureStore({
    reducer:{
        card:cardSlice.reducer,
        finance:financeSlice.reducer,
        loan:loanSlice.reducer,
        friends:friendSlice.reducer,
        expense:expenseSlice.reducer,
        transactions:transactionSlice.reducer,
        
        
    }
});

export default store;

