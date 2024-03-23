import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../Firebaseconfig";
import { useAuth } from "../AuthContext";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [displayError, setDisplayError] = useState("");
    const { logedin, setlogedin } = useAuth();



    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredentials.user;
            setlogedin(true);
            localStorage.setItem('logedin', JSON.stringify(true));

            navigate("/dashboard");
            toast.success('User logged in ', {
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

    useEffect(() => {
        if (
            error === "auth/invalid-login-credentials" || error === "auth/invalid-credential"
        ) {
            setDisplayError("Invalid login credentials");
            toast.warn("Invalid login credentials", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else if (error === "auth/invalid-email") {
            setDisplayError("Invalid Email");
            toast.warn("Invalid Email", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }, [error]);

    const emailHandler = (event) => {
        setEmail(event.target.value);
    };
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };
    return (
        <div className='homepage'>
            <div className="container">
                <div className="left-panel" onClick={() => { navigate("/") }}>
                    <div className="txte">Login</div>
                </div>
                <div className="right-panel" onClick={() => { navigate("/signup") }} >
                    Sign Up
                </div>
                <div className="overlay-box">
                    <div className="pays10 ">
                        <form onSubmit={submitHandler}>
                            <br />
                            <div className="at0">
                                <div className="at21">
                                    <div className="cp1">
                                        <h2>Login</h2>
                                    </div>
                                </div>
                                <div className="at2">
                                    <div className="cp1">
                                        <label className="label" htmlFor="emailInput">Email:</label>
                                        <div className="amnt">
                                            <input className="inpt" name='email' type="email" placeholder='123@x.com' onChange={emailHandler} />
                                        </div>
                                    </div>
                                </div>
                                <div className="at2">
                                    <div className="cp1">
                                        <label className="label" htmlFor="passwordInput">Enter Password:</label>
                                        <div className="amnt">
                                            <input className="inpt" name='password' type="password" onChange={passwordHandler} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5>If you don't have an account, create one.</h5>
                            <br />
                            {error !== null ? (
                                <div className="login_error">{displayError}</div>
                            ) : undefined}
                            <div className="btnbtnc">
                                <button className="btnbtn" type="submit">Submit</button>
                            </div>
                        </form>
    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

