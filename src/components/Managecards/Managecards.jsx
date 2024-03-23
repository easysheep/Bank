import React, { useState } from 'react'
import "./Managecards.css"
import Mcpiechart from "./Mcpiechart"
import { MdBlock } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { useSelector, useDispatch } from 'react-redux';
import { addCard ,resetAddCardStatus} from '../../slices/OneSlice';

const Managecards = () => {
    const dispatch = useDispatch();

    const cardarray = useSelector((state) => state.card.cards);
    const addCardStatus = useSelector((state) => state.card.addCardStatus);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleViewDetails = (card) => {
        setSelectedCard(card);
    };

    const handleCloseDetails = () => {
        setSelectedCard(null);
    };
    if (addCardStatus === 'success') {
        console.log('Card added successfully!');
        dispatch(resetAddCardStatus()); // reset the status after handling it
      } else if (addCardStatus === 'failure') {
        console.log('Card limit reached. Cannot add more cards.');
        dispatch(resetAddCardStatus()); // reset the status after handling it
      }

    const [issuedBy, setIssuedBy] = useState('');
    const [validityMonth, setValidityMonth] = useState('');
    const [validityYear, setValidityYear] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [balance, setBalance] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [setPin, setSetPin] = useState('');


    const handleAddCard = () => {
        // Create an object with the input values
        const newCard = {
            bank: issuedBy,
            valid_thru: `${validityMonth}/${validityYear}`,
            holder: nameOnCard,
            balance: parseFloat(balance),
            number: cardNumber,
            pin: setPin,
        };

        // Dispatch the addCard action
        dispatch(addCard(newCard));

        // Clear the input fields after adding the card
        setIssuedBy('');
        setValidity('');
        setNameOnCard('');
        setBalance('');
        setCardNumber('');
        setSetPin('');
    };




    return (
        <div className='managecards'>
            <div className="cl">
                <div className="cardarea">
                    <h2>Card List</h2>
                    <br />
                    <div className="list">
                        {cardarray.map((card) => (
                            <div className="crd">
                                <div className="col1"><i class="fa-regular fa-credit-card" style={{ color: "#ffff" }}></i></div>
                                <div className="col2">
                                    <div className="ur">
                                        <div className="cd1">Bank</div>
                                        <div className="cd1">Card Number</div>
                                        <div className="cd1">Card holder</div>
                                    </div>
                                    <div className="lr">
                                        <div className="cd">{card.bank}</div>
                                        <div className="cd">{card.number}</div>
                                        <div className="cd">{card.holder}</div>

                                    </div>
                                </div>
                                <div className="col3" onClick={() => handleViewDetails(card)}>View Details</div>
                            </div>


                        ))}



                    </div>
                    {selectedCard && (
                        <div className="details-container">
                            <h3>Card Details</h3>
                            <p>Bank: {selectedCard.bank}</p>
                            <p>Card Validity:{selectedCard.valid_thru}</p>
                            <p>Card Number: {selectedCard.number}</p>
                            <p>Card Holder: {selectedCard.holder}</p>
                            <p>Card Pin: {selectedCard.pin}</p>
                            <p>Card Pin: {selectedCard.balance}</p>

                            <button onClick={handleCloseDetails}>Close Details</button>
                        </div>
                    )}

























                </div>
                <div className="cardst">
                    <h2>Card Expense Distribution</h2>
                    <br />
                    <div className="ced">
                        <Mcpiechart />
                    </div>
                </div>



            </div>
            <div className="pl">
                <div className="cardadd">
                    <h2>Add Card</h2>
                    <span className="span5">*Only upto three cards available for one account </span>
                    <br />
                    <div className="form">
                        <div className="rs">
                            <div className="lb">
                                Issued By
                                <input type="text" className="input" value={issuedBy} onChange={(e) => setIssuedBy(e.target.value)} />
                            </div>
                            <div className="lb">
                                Validity
                                <div className="input-group">
                                    <input type="number" placeholder="MM" className="input" value={validityMonth} onChange={(e) => setValidityMonth(e.target.value)} />
                                    <input type="number" placeholder="YY" className="input" value={validityYear} onChange={(e) => setValidityYear(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="rs">
                            <div className="lb">
                                Name On Card
                                <input type="text" className="input" value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} />
                            </div>
                            <div className="lb">
                                Balance
                                <input type="number" className="input" value={balance} onChange={(e) => setBalance(e.target.value)} />
                            </div>
                        </div>
                        <div className="rs">
                            <div className="lb">
                                Card Number
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="xxxx-xxxx-xxxx"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                />
                            </div>
                            <div className="lb">
                                Set Pin
                                <input type="password" className="input" value={setPin} onChange={(e) => setSetPin(e.target.value)} />
                            </div>
                        </div>
                        <div className="rs">
                            <button className="btn" onClick={handleAddCard}>
                                Add Card
                            </button>
                        </div>
                    </div>
                </div>
                <div className="cs">
                    <h2>Card Settings</h2>
                    <br />
                    <div className="csbox">
                        <div className="sr">
                            <div className="ic"><MdBlock size={40} /></div>
                            <div className="so">Block Card</div>


                        </div>
                        <div className="sr">
                            <div className="ic"><MdPassword size={40} /></div>
                            <div className="so">Change Pin</div>


                        </div>
                        <div className="sr">
                            <div className="ic"><TbListDetails size={40} /></div>
                            <div className="so">Edit Card Details</div>


                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Managecards;
