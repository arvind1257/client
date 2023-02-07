import {Link, useNavigate, useLocation} from "react-router-dom"
import img1 from "../icon.png"
import "../main.css"
import "../dialogBox/dialog.css"
import "../inputstyle.css"
import React,{useState} from "react"
import { logIn } from "../actions/auth"
import { useDispatch, useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import "../main.css"
import { Form, Slink1 } from "../mediaQuery/mediaQuery"


const Main = (props) => {
    const [click,setClick] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    var mess = useSelector(state => state.authReducer)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password)
        {
            alert("Email and Password can't be Empty")
        }
        else{
            dispatch(logIn({email,password},navigate))
            setClick(true)
        }
    }

    if(location.state)
    {
        if(location.state.load===false && click===true)
        {
            setClick(false)
            navigate('/',{state:null})
        }
        if(location.state.message===false)
        {
            mess=""
        }
    }

    return (
            <Form className="form">
                {
                    click===true && <>
                        <div className="ani1"></div>
                        <div className="ani2">
                            <div className="ani3">Loading...</div>
                            <div>
                                <img src="coin.png" id="img1" alt="no"/>
                                <img id="move" src="coin.png" alt="no"/>
                                <img id="move1" src="coin.png" alt="no"/>
                                <img id="move2" src="coin.png" alt="no"/>
                                <img src="icon1.png" id="img2" alt="no"/>
                            </div>
                        </div>
                    </>
                }
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
                                {
                                    mess.data && mess.data.status==="Error" && <>
                                        <br/><br/>
                                        <div className="login__field" style={{color:"red"}}>
                                            {mess.data.message}
                                        </div>
                                    </>
                                }
                                {
                                    mess.data && mess.data.status==="Success" && <>
                                        <br/><br/>
                                        <div className="login__field" style={{color:"green"}}>
                                            {mess.data.message}
                                        </div>
                                    </>
                                }
                                {
                                    !mess.data && <>
                                        <br/>
                                    </>
                                }
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
