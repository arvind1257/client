import {Link, useNavigate} from "react-router-dom"
import img1 from "../icon.png"
import "../main.css"
import "../dialogBox/dialog.css"
import "../inputstyle.css"
import React,{useState} from "react"
import { logIn } from "../actions/auth"
import { useDispatch } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import "../main.css"
import { Form, Slink1 } from "../mediaQuery/mediaQuery"


const Main = (props) => {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password)
        {
            alert("Email and Password can't be Empty")
        }
        else{
            dispatch(logIn({email,password},navigate))
        }
    }

    return (
            <Form className="form">
                <div className="row loginform">
                    <fieldset className="col-xl-4 col-lg-5 col-md-6 col-sm-7 col-8 fieldset center">
                        <legend className="legend center">
                            <img src={img1}
                                alt="no img"
                                className="iconstyle"/>
                        </legend>
                        <form onSubmit={handleSubmit}>
                            <h1 className="text">LOGIN</h1>
                            <br/>
                            <br/>
                            <center>
                                <div className="login__field">
                                    <i className="login__icon fas fa-user"></i>
                                    <input className="effect-8 login__input" type="text" name="username" placeholder="Email ID" onChange={(e) => setEmail(e.target.value)}/>
                                    <span className="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                                <br/>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock"></i>
                                    <input className="effect-8 login__input" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                    <span className="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                                <br/>
                                <div className="login__field">
                                    <Link to="/forgotpassword" className="flink" href="forgotpassword.php">
                                        forgot password?
                                    </Link>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <Slink1 className="button">
                                    Login
                                </Slink1>
                                <br/>
                                <br/>
                                <h4 className="line">
                                    <span>or</span>
                                </h4>
                                <br/>
                                <div>
                                    Create an Account?&ensp;
                                    <Link to="/signup"
                                        style={
                                            {
                                                color: "blue",
                                                textDecoration: "underline"
                                            }
                                    }>
                                        Sign Up
                                    </Link>
                                </div>
                                <br/>
                            </center>
                        </form>
                    </fieldset>
                </div>
            </Form>
        )
}

export default Main;
