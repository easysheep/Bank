import React, { useEffect, useRef } from 'react';
import {Chart}  from 'chart.js/auto';

const Mcpiechart= () => {
    const chartref=useRef(null);
    const chartinstance=useRef(null);

    useEffect(()=>{
        if(chartinstance.current){chartinstance.current.destroy()}
        const mychartref=chartref.current.getContext("2d");
        chartinstance.current=new Chart(mychartref,{
            type:'pie',
            data:{
                labels: ["CS","WF","BOA"],
                datasets: [
                  {
                    data: [7830,5000,3000],
                    backgroundColor: ['#3EC7A0',"#2DAA82","#4DD7B6"],
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
                  },
                },
              },
              

        })
        return ()=>{
            if(chartinstance.current){
                chartinstance.current.destroy();
            }
        }
    },[])

  return (
    <canvas ref={chartref} style={{width:"180px",height:"250px",backgroundColor:"#252f45",color:"white",padding:"8px"}}/>
  );
};

export default Mcpiechart;