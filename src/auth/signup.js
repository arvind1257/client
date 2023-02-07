import {Link, useNavigate} from "react-router-dom";
import "../main.css";
import "../dialogBox/dialog.css"
import "../inputstyle.css";
import React,{useState} from "react";
import { signUp } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Scol1, Slink2, Text } from "../mediaQuery/mediaQuery"


const Main = (props) => {

    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [gender,setGender] = useState('male')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] = useState('')    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password)
        {
            alert("Email and Password can't be Empty")
        }
        else
        {
            if(!fname || !lname || !gender || !password || !confirm){
                alert("Fill all the Details in form")
            }
            else if(password!==confirm)
            {
                alert("Password doesn't match");
            }
            else{
                dispatch(signUp({fname,lname,gender,email,password},navigate))
            }
        }
    }

    var message = useSelector(state => state.authReducer)

    return (
            <Form className="form1">
                { 
                    message.data && message.data.status==="Error" &&
                    <div className="col-xl-5 col-lg-6 col-md-7 col-sm-8 col-9 aleretRed">
                    <p>{message.data.message}</p>
                    </div> 
                }
                <div className="row loginform">
                    <fieldset className="col-xl-5 col-lg-6 col-md-7 col-sm-8 col-9 fieldset center signup">
                        <form onSubmit={handleSubmit}>
                        <h1 className="text signup">SIGN UP</h1>
                        <div className="scol">
                            <Text className='text2'>First name</Text>
                            <Scol1 className="scol1"> : <input className="sinput" type="text" name="uname" onChange={(e) => setFname(e.target.value)}/></Scol1>
                        </div>
                        <div className="scol">
                            <Text className='text2'>Last name</Text>
                            <Scol1 className="scol1"> : <input className="sinput" type="text" name="uname" onChange={(e) => setLname(e.target.value)}/></Scol1>
                        </div>
                        <div className="scol">
                            <Text className='text2'>Gender</Text>
                            <Scol1 className="scol1">
                                : <select className="sinput" name="gender" onChange={(e) => setGender(e.target.value)}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </Scol1>
                        </div>
                        <div className="scol">
                            <Text className='text2'>Email ID</Text>
                            <Scol1 className="scol1"> : <input className="sinput" type="text" name="email" onChange={(e) => setEmail(e.target.value)} /></Scol1>
                        </div>
                        <div className="scol">
                            <Text className='text2'>Password</Text>
                            <Scol1 className="scol1"> : <input className="sinput" type="text" name="upass" onChange={(e) => setPassword(e.target.value)}/></Scol1>
                        </div>
                        <div className="scol">
                            <Text className='text2'>Confirm<br/>Password</Text>
                            <Scol1 className="scol1"> : <input className="sinput" type="text" name="ucpass" onChange={(e) => setConfirm(e.target.value)}/></Scol1>
                        </div>
                        <Slink2 className="button" style={{fontSize:"25px"}}>
                            SIGN UP
                        </Slink2>
                        
                        </form>
                        <br/>
                        <h4 className="line">
                            <span>or</span>
                        </h4>
                        <br/>
                        <div style={{paddingBottom:"10px"}}>
                            Already have Account?&ensp;
                            <Link to="/" style={{color: "blue",textDecoration: "underline"}}>Login</Link>
                        </div>
                    </fieldset>
                </div>
            </Form>
        )
}

export default Main;
