import { Link } from '@mui/material';
import React from 'react'
import "./Loan.css"
import { setLoanObj } from '../../slices/OneSlice';
import { useDispatch } from 'react-redux';

const Loan = () => {

  const dispatch = useDispatch();

  const handleSetLoanObj = () => {
    const loanDetails = {
      desc: "Your Description",
      loanmoney: "Your Loan Money",
      duration: "Your Duration",
      rate: "Your Rate",
    };
    dispatch(setLoanObj(loanDetails));
  };
  return (
    <div className='payment'>





    <div className="pays1">
 
      <br />

      <div className="at0">
        <div className="at2">
            <div className="cp1">
            <label class="label" for="amountInput">Name:</label>
            <div className="amnt"><input className="inpt" name='amount' type="text" placeholder='name'   /></div>
            </div>
          <div className="cp1">
          <label class="label" for="amountInput">DOB:</label>
          <div className="amnt"><input className="inpt" name='amount' type="date" placeholder='dd-mm-yy'   /></div>
          </div>
          

        </div>

        <div className="at2">
            <div className="cp1">
            <label class="label" for="amountInput">E-mail:</label>
          <div className="amnt"><input className="inpt" name='amount' type="email" placeholder='123@x.com'   /></div>

            </div>

            <div className="cp1">
            <label class="label" for="amountInput">Phone Number:</label>
          <div className="amnt"><input className="inpt" name='amount' type="number" placeholder='91+xxxxxxxxxx'   /></div>

            </div>
          

          

        </div>




        <div className="at2">
            <div className="cp1">
            <label class="label" for="amountInput">Amount:</label>
            <div className="amnt"><input className="inpt" name='cardNumber' type="number" placeholder='$ xxxx' /></div>

            </div>


            <div className="cp1">
            <label class="label" for="amountInput">Card Number:</label>
          <div className="amnt"><input className="inpt" name='cardNumber' type="number" placeholder='$ XXXX XXXX XXXX' /></div>

            </div>

            
            



          


          

        </div>



        <div className="at2">


        <div className="cp1">
            <label class="label" for="amountInput">Enter Pin:</label>
          <div className="amnt"><input className="inpt" name='pin' type="password" /></div>

            </div>
          

        </div>




      </div>

      <div className="btnbtnc"><Link to='/transactions' onClick={handleSetLoanObj}><button className="btnbtn">Apply</button></Link></div>








    </div>


  </div>

  )
}

export default Loan;
