import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebaseconfig"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { useAuth } from '../AuthContext';


const Signuppage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [displayError, setDisplayError] = useState("");
    const { logedin, setlogedin } = useAuth();


    const navigate = useNavigate();
    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredentials.user;
            setlogedin(true);
            localStorage.setItem('logedin', JSON.stringify(true));

            navigate("/dashboard");
            toast.success('User signed in ', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })


            console.log(user);
        } catch (error) {
            console.error(error.code);
            setError(error.code);
        }
    };
    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        if (error === "auth/invalid-login-credentials") {
            setDisplayError("Invalid login credentials");
        } else if (error === "auth/invalid-email") {
            setDisplayError("Invalid Email");
        } else if (error === "auth/missing-password") {
            setDisplayError("Password is required ");
        } else if (error === "auth/weak-password") {
            setDisplayError("Weak password");
        }
    }, [error]);
    return (
        <div className='homepage'>
            <div className="container">
                <div className="left-panel" onClick={() => { navigate("/") }}>
                    <div className="txte">Login</div>
                </div>
                <div className="right-panel" >
                    Sign Up
                </div>
                <div className="overlay-box">

                    <div className="pays10 ">
                        <form onSubmit={submitHandler}>
                            <br />


                            <div className="at0">
                                <div className="at21">
                                    <div className="cp1">
                                        <h2>Sign Up</h2>

                                    </div>














                                </div>






                                <div className="at2">
                                    <div className="cp1">
                                        <label class="label" for="amountInput">Email:</label>
                                        <div className="amnt"><input className="inpt" name='cardNumber' type="email" placeholder='123@x.com' onChange={emailHandler} /></div>

                                    </div>














                                </div>



                                <div className="at2">


                                    <div className="cp1">
                                        <label class="label" for="amountInput">Enter Password:</label>
                                        <div className="amnt"><input className="inpt" name='pin' type="password" onChange={passwordHandler} /></div>

                                    </div>


                                </div>




                            </div>
                            {error !== null ? (
                                <div className="login_error">{displayError}</div>
                            ) : undefined}

                            <div className="btnbtnc"><button className="btnbtn" >Sign Up</button></div>

                        </form>











                    </div>

                </div>
            </div>

        </div>
    )
}

export default Signuppage;
