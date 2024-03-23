import React from 'react'
import "./Payment.css"
import { useDispatch, useSelector } from 'react-redux';
import { addtoexpenses,reduceBalance } from '../../slices/OneSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Payment = () => {
  function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 8;
    let randomId = '';
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
    return randomId;
  }
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }



  const dispatch = useDispatch();
  const [paymentData, setPaymentData] = useState({
    desc:' ',
    cardNumber: '',
    amount: '',
    date: getTodayDate(),
    transactionId: generateRandomId(),
    pin:''
  });
  const friendtopay = useSelector((state) => state.friends.friendtopay);
  const cards = useSelector((state) => state.card.cards);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePayNow = () => {
    const enteredCardNumber = paymentData.cardNumber.replace(/\s/g, '');
    const selectedCard = cards.find(card => card.number.replace(/\s/g, '') === enteredCardNumber);
    const enteredCardPin=paymentData.pin;


    if (selectedCard) {
      if (!selectedCard.blocked && selectedCard.pin === enteredCardPin) {
        console.log('Payment Data:', paymentData);

        dispatch(reduceBalance({ cardNumber: enteredCardNumber, amount: parseInt(paymentData.amount) }));
        console.log(`${paymentData.amount} have been deducted with card number ${enteredCardNumber}`)
        dispatch(addtoexpenses(paymentData));
      } else {
        console.log('Payment failed. Card is blocked.');
        // Set an error message or take other actions
      }
    } else {
      console.log('Invalid card number.');
      // Set an error message or take other actions
    }
  };




  return (



    <div className='payment'>





      <div className="pays">
        <div className="row10">
          {friendtopay.map((image) => (
            <div key={image} className="i10"><img src={image} alt="" className='img10' /></div>


          ))}

        </div>
        <div className="nm">Pay Lisa</div>
        <br />

        <div className="at">
          <div className="at1">
            <label class="label" for="amountInput">Amount:</label>
            <div className="amnt"><input className="inpt" name='amount' type="number" placeholder='$ XXX' value={paymentData.amount} onChange={handleInputChange} /></div>

          </div>




          <div className="at1">
            <label class="label" for="amountInput">Card Number:</label>
            <div className="amnt"><input className="inpt" name='cardNumber' type="number" placeholder='$ XXXX XXXX XXXX'  value={paymentData.cardNumber} onChange={handleInputChange}/></div>

          </div>



          <div className="at1">
            <label class="label" for="amountInput">Enter Pin:</label>
            <div className="amnt"><input className="inpt" name='pin' type="password"  value={paymentData.pin} onChange={handleInputChange}/></div>

          </div>



          <div className="at1">
            <label class="label" for="amountInput">Description</label>
            <div className="amnt"><input className="inpt" name='desc' type="text"  value={paymentData.desc} onChange={handleInputChange}/></div>

          </div>




        </div>

        <div className="btnbtnc"><Link to='/transactions'><button className="btnbtn" onClick={handlePayNow}>Pay Now</button></Link></div>








      </div>


    </div>


  )
}

export default Payment;