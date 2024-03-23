import React from 'react'
import "./Dashboard.css"
import PieChart from './Piechart';
import { useSelector } from 'react-redux';
import Curvedbarchart from './Curvedbarchart';
import { useAuth } from "../../AuthContext";
const Dashboard = () => {
    const {userData, setuserData} = useAuth();
    console.log(userData);

    const cardarray=useSelector((state)=>state.card.cards);


    const getLastWeekDays = () => {
        const today = new Date();
        const lastWeek = new Date(today);
        lastWeek.setDate(today.getDate() - 6);
    
        const days = [];
        for (let i = 0; i <= 6; i++) {
          const day = new Date(lastWeek);
          day.setDate(lastWeek.getDate() + i);
          days.push(day.toLocaleDateString('en-US', { weekday: 'short' }));
        }
    
        return days;
      };
    
      const data = {
        labels: getLastWeekDays(),
        datasets: [
          {
            label: 'Last week expenses  ',
            data: [12,90,66,11,9,16,55], // Replace with your actual data
            backgroundColor: '#3EC7A0',// Base color for the bars
            legend: {
                display: true,
                labels: {
                  color: 'white', // Set the color of legend text
                },
              },
            
          },
          

        ],
      };


    return (
        <>
            <div className='dashbrd'>
                <div className="card">
                    <h2>My Cards</h2>
                    <br />
                    <div className="cardimgcontent">
                        {cardarray.map((card)=>(
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
                                <div className="icon"><i class="fa-solid fa-piggy-bank"style={{color: "#ffffff"}}></i></div>
                            </div>

                        </div>

                        ))}
                        









                    </div>

                </div>


                <div className="expenses">
                    <div className="lpc">
                        <h2>Expense Statistics</h2>
                        <br />
                        <div className="pchart">
                            <PieChart />
                        </div>

                    </div>

                    <div className="rpc">
                        <h2>Weekly Activity</h2>
                        <br />
                        <div className="weeklyactivity" >
                        <Curvedbarchart data={data} style={{height:"350px"}} />

                           

                        </div>
                       

                    </div>


                    
                </div>




            </div>


        </>
    )
}

export default Dashboard; 