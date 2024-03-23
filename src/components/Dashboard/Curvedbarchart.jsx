import React from 'react';
import { Bar } from 'react-chartjs-2';

const Curvedbarchart = ({ data }) => {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white', // Set the color of x-axis tick labels
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white', // Set the color of x-axis tick labels
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 15,   
        backgroundColor:"#3EC7A0"             
      },
      
    },
    maintainAspectRatio: false, // Set to false to allow custom sizing
    responsive: true, // Set to true for responsiveness
    
    barThickness: 70,
    height: 350, // Adjust the height of the chart
    width: 800,
    backgroundColor:"#3EC7A0",
    
    

  };
  return (
    <div>
      <Bar data={data} options={options} style={{width:"300px",height:"350px",backgroundColor: '#252f45',padding:"10px",color:"white"}}/>
    </div>
  );
};

export default Curvedbarchart;
