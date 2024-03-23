import React from 'react'
import "./Transaction.css"
import { Link } from 'react-router-dom';
import PieChart from '../Dashboard/Piechart';
import { useSelector, useDispatch } from 'react-redux';
import { reduceTotalBalance, addtoarray, emptyarray } from '../../slices/OneSlice';
import { useEffect } from "react"
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Transaction = () => {
    const dispatch = useDispatch();
    const cardarray = useSelector((state) => state.card.cards);
    const friendsarray = useSelector((state) => state.friends.friendsarray);

    const columns = ["Description", "Card", "Amount", "Date","transid"];
    const transarray=useSelector((state)=>state.transactions.alltrans);

    const data =transarray.map((obj)=>(Object.values(obj)));
    console.log("print data")
    console.log(data)

    const options = {
        selectableRows:false,
        
    };

    const handleaddtoarray = (item) => {
        dispatch(addtoarray(item));

    }
    useEffect(() => {
        dispatch(emptyarray());
    })

    const handlepay = () => {
        const amt = 100;
        console.log("hello");
        dispatch(reduceTotalBalance(amt));


    }

    const transactions = [
        {
            desc: "212",
            card: "231",
            amount: "1223",
            date: "12/23/12",
            transid: "s2e1"
        },
        {
            desc: "213",
            card: "231",
            amount: "1223",
            date: "12/23/12",
            transid: "s2e1"
        },
    ]

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





    return (
        <div className='transaction'>
            <div className="card">
                <h2>My Cards</h2>
                <br />
                <div className="cardimgcontent">
                    {cardarray.map((card) => (
                        <div className="cardimg">
                            <div className="bl">
                                <div className="l1">Balance</div>
                                <div className="l5"><h2>${card.balance}</h2></div>

                            </div>



                            <div className="dtl">
                                <div className="l2">
                                    <div className="">CARD HOLDER</div>
                                    <div className="">VALID THRU</div>
                                </div>
                                <div className="l3">
                                    <div className="name">{card.holder} </div>
                                    <div className="">{card.valid_thru}</div>
                                </div>

                            </div>




                            <div className="l4">
                                <div className="num">{card.number}</div>
                                <div className="icon"><i class="fa-solid fa-piggy-bank" style={{ color: "#ffffff" }}></i></div>
                            </div>

                        </div>

                    ))}










                </div>

            </div>




            <div className="pay">
                <h2 className='h2'>Pay Friends</h2>
                <div className="row1">
                    {friendsarray.map((image, index) => (
                        <div key={image} className="i1"><Link to='/payment'><img src={image} alt="" className='img1' onClick={() => { handleaddtoarray(image) }} /></Link></div>


                    ))}

                    {/* <button onClick={handlepay}>paynow</button> */}

                </div>
            </div>

            <div className="transhistory">
                <h2>Recent Transactions</h2>
                <br />
                <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"All Transactions"}
                    data={data}
                    columns={columns}
                    options={options}
                />
                </ThemeProvider>


            </div>

        </div>
    )
}

export default Transaction;
