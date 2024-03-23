import { MdAccountBalance } from "react-icons/md";
import { FaCaretSquareDown } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import React from 'react'
import "./LoanManager.css"
import { useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useState } from "react";
const LoanManager = () => {
    const loanobj = useSelector((state) => state.loan.loanobj);
    const loanarray=useSelector((state)=>state.loan.currloanarray);
    console.log(loanarray);
    const options = {
        selectableRows:false,
        
    };
    const columns = ["Description", "Loan Money", "Duration", "Interest Rate","Installment"];
    const data =loanarray.map((obj)=>(Object.values(obj)));
    const components = {
        icons: {
        
        }
      };
    const totalloan = useSelector((state)=>state.loan.totalloan);
    const repaid = useSelector((state)=>state.loan.loanrepaid);
    const fixedexp=[
        {
            
            desc:"spotify",
            loanmoney:"$12000",
            duration:'20 months',
            rate:"12%",
            installment:"$1000"
            
        },
    ]
    const getMuiTheme=()=>{
        return createTheme({
            typography:{
                fontFamily:"Poppins",
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
  return (
    <div className='loanmanager'>
        <div className="loans">
        <div className="box">
                <div className="icon"><MdAccountBalance /></div>
                <div className="con">
                    <div className="up"><b>Total Loan</b></div>
                    <div className="num1">$ {totalloan}</div>
                </div>
            </div>
            <div className="box">
            <div className="icon"><FaCaretSquareDown /></div>
                <div className="con">
                    <div className="up"><b>Loan Repaid</b></div>
                    <div className="num1">$ {repaid}</div>
                </div>
            </div>
            <div className="box">
            <div className="icon"></div>
                <div className="con">
                    <div className="up"><b>Expenses</b></div>
                    <div className="num1">$ 2340</div>
                </div>
                
                

            </div>
            <div className="box">
            <div className="icon"><i class="fa-solid fa-piggy-bank"></i></div>
                <div className="con">
                    <div className="up"><b>Savings</b></div>
                    <div className="num1">$ 7890</div>
                </div>
            </div>
        </div>
        <div className="cl9">
            <h2>Current Loans</h2>
            <br />
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"All Loans"}
                    data={data}
                    columns={columns}
                    options={options}
                    components={components}
                />
                </ThemeProvider>

        </div>
        <div className="al">
            <h2>Loan Services List</h2>
            <div className="head1" >
                    <div className="crd">
                            <div className="col1"><FaHouse /></div>
                            <div className="col4"><div className="cd1">House Loan</div></div>
                            <div className="col2">
                                <div className="ur">
                                    
                                    <div className="cd1">Interest Rate</div>
                                    <div className="cd1">Duration</div>
                                </div>
                                <div className="lr">
                                    <div className="cd1">3.25%</div>
                                    <div className="cd1">40 years</div>
                                </div>
                            </div>
                            <div className="col3"><Link to='/loan' className="col3">Apply For Loan</Link></div>
                        </div>


                        <div className="crd">
                            <div className="col1"><FaCarSide /></div>
                            <div className="col4"><div className="cd1">Car Loan</div></div>
                            <div className="col2">
                                <div className="ur">
                                    <div className="cd1">Interest Rate</div>
                                    <div className="cd1">Duration</div>
                                </div>
                                <div className="lr">
                                    <div className="cd1">4.8%</div>
                                    <div className="cd1">5 years</div>
                                </div>
                            </div>
                            <div className="col3"><Link to='/loan'  className="col3" onClick={() => handleViewDetails(4.8, '5 years', 'Car Loan')}>Apply For Loan</Link></div>
                        </div>



                        <div className="crd">
                            <div className="col1"><FaCarSide /></div>
                            <div className="col4"><div className="cd1">Business Loan</div></div>
                            <div className="col2">
                                <div className="ur">
                                    <div className="cd1">Interest Rate</div>
                                    <div className="cd1">Duration</div>
                                </div>
                                <div className="lr">
                                    <div className="cd1">7.5%</div>
                                    <div className="cd1">7 years</div>
                                </div>
                            </div>
                            <div className="col3"><Link to='/loan'  className="col3" onClick={() => handleViewDetails(7.5, '7 years', 'Business Loan')}>Apply For Loan</Link></div>
                        </div>




                        <div className="crd">
                            <div className="col1"><PiStudentFill /></div>
                            <div className="col4"><div className="cd1">Student Loan</div></div>
                            
                            <div className="col2">
                                <div className="ur">
                                    
                                    <div className="cd1">Interest Rate</div>
                                    <div className="cd1">Duration</div>
                                </div>
                                <div className="lr">
                                    <div className="cd1">5%</div>
                                    <div className="cd1">4 years</div>
                                </div>
                            </div>
                            <div className="col3"><Link to='/loan'  className="col3" onClick={() => handleViewDetails(5, '4 years', 'Student Loan')}>Apply For Loan</Link></div>
                        </div>
                </div>

            
            
        </div>

      
    </div>
  )
}

export default LoanManager;
