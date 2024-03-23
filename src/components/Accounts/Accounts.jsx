import React, { useEffect } from 'react'
import "./Accounts.css"
import { FaCoins } from "react-icons/fa6";
import Accpiechart from "./Accpiechart"
import { useSelector,useDispatch } from 'react-redux';
import { calculateTotalExpense } from '../../slices/OneSlice';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';



const Accounts = () => { 
    const columns = ["Description", "Amount","Duration"];
    const options = {
        selectableRows:false,
        
    };



    const expnarray=useSelector((state)=>state.expense.fixedexpenses);

    const data =expnarray.map((obj)=>(Object.values(obj)));

    const getMuiTheme=()=>{
        return createTheme({
            typography:{
                fontFamily:"Poppins",
                fontWeightBold:"800",
            },
            palette:{
                background:{
                    paper:"#3EC7A0"
                },
                mode:"dark"
            },
            overrides: {
                MUIDataTable: {
                  paper: {
                    backgroundColor: '#3EC7A0', // Change this to the desired background color
                
                  },
                },
               
              },
        });
    }
    const dispatch=useDispatch();

    const income = useSelector((state)=>state.finance.totalincome);
    const cardarray=useSelector((state)=>state.card.cards);
 
    let sum=0;


    {cardarray.map((card)=>(
        sum=sum+card.balance))}

    {}
    
    


  return (
    <div  className="accounts">
        <div className="finstats">
            <div className="box">
                <div className="icon"><i class="fa-solid fa-sack-dollar"></i></div>
                <div className="con">
                    <div className="up"><b>My balance</b></div>
                    <div className="num1">$ {sum}</div>
                </div>
            </div>
            <div className="box">
            <div className="icon"><i class="fa-solid fa-money-bill"></i></div>
                <div className="con">
                    <div className="up"><b>Income</b></div>
                    <div className="num1">$ {income}</div>
                </div>
            </div>
            <div className="box">
            <div className="icon"><FaCoins /></div>
                <div className="con">
                    <div className="up"><b>Expenses</b></div>
                    <div className="num1">$ </div>
                </div>
                
                

            </div>
            <div className="box">
            <div className="icon"><i class="fa-solid fa-piggy-bank"></i></div>
                <div className="con">
                    <div className="up"><b>Savings</b></div>
                    <div className="num1">$ </div>
                </div>
            </div>
        </div>

        <div className="pfd">
            <h2>Personal Finance Distribution</h2>
            <br />
            <div className="acchart">
            <Accpiechart/>

            </div>
        
        </div>

        <div className="fe">
            <h2>&nbsp;Fixed Expenses</h2>
            <br />
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"All Transactions"}
                    columns={columns}
                    options={options}
                    data={data}
                  
              
                   
                />
                </ThemeProvider>
            
        </div>

    </div>
  )
}

export default Accounts;
