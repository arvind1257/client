import {Link, useNavigate} from "react-router-dom";
import "../main.css";
import "../dialogBox/dialog.css"
import "../inputstyle.css";
import React,{useState} from "react";
import { signUp } from "../actions/auth";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Scol1, Slink2, Text } from "../mediaQuery/mediaQuery"


const Main = (props) => {

    const [name,setName] = useState('')
    const [dob,setDob] = useState('')
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
            if(!name || !dob || !gender || !confirm){
                alert("Fill all the Details in form")
            }
            else{
                dispatch(signUp({name,dob,gender,email,password},navigate))
            }
        }
    }

    return (
            <Form className="form1">
                <div className="row loginform">
                    <fieldset className="col-xl-5 col-lg-6 col-md-7 col-sm-8 col-9 fieldset center signup">
                        <form onSubmit={handleSubmit}>
                        <h1 className="text signup">SIGN UP</h1>
                        <br/>
                        <div className="scol">
                            <Text className='text2'>Name</Text>
                            <Scol1 className="scol1"> : <input className="sinput" type="text" name="uname" onChange={(e) => setName(e.target.value)}/></Scol1>
                        </div>
                        <div className="scol">
                            <Text className='text2'>DOB</Text>
                            <Scol1 className="scol1"> : <input className="sinput" type="date" name="udate" onChange={(e) => setDob(e.target.value)}/></Scol1>
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
                        <Slink2 className="button" style={{padding:"4px 18%",fontSize:"25px"}}>
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
