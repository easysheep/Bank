import React, { useEffect, useRef } from 'react';
import {Chart}  from 'chart.js/auto';
import { useSelector } from 'react-redux';

const PieChart = () => {
    const chartref=useRef(null);
    const chartinstance=useRef(null);
    const expenses = useSelector(state => state.expense.expense);



    useEffect(()=>{
        if(chartinstance.current){chartinstance.current.destroy()}
        const mychartref=chartref.current.getContext("2d");
        chartinstance.current=new Chart(mychartref,{
            type:'pie',
            data:{
                labels:Object.keys(expenses),
                datasets: [
                  {
                    data:Object.values(expenses),
                    backgroundColor: ['#3EC7A0',"#2DAA82","#4DD7B6","#34b28e","#4DD7A0 "],
                    borderWidth:1,
                    hoverOffset:30,

                    
                  },
                ],

              },
              options: {
                plugins: {
                  legend: {
                    labels: {
                      color: 'white', // Set the color for legend labels
                    },
                    display: true,
                  
                  },
                },
                backgroundColor: '#252f45', // Set the background color of the entire chart
              },

        })
        return ()=>{
            if(chartinstance.current){
                chartinstance.current.destroy();
            }
        }
    },[])

  return (
    <canvas ref={chartref} style={{width:"300px",height:"300px",backgroundColor: '#252f45',padding:"10px"}}/>
  );
};

export default PieChart;
