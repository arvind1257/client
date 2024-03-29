import React,{useState} from "react";
import "./dialog.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Setting } from '../actions/features'
import { Dialog, Box, Text, Scol1 } from "../mediaQuery/mediaQuery"

const Settings = (props) => {
    
    var user = {}
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [id,setId] = useState("")
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [email,setEmail] = useState("")
    const [edit,setEdit] = useState(false)
    const [state1,setState1] = useState(0)
    const [gender,setGender] = useState("")
    const [cashType,setCashType] = useState("")
    const [cash,setCash] = useState(0);
    const [acc,setAcc] = useState(0)
    if(JSON.parse(localStorage.getItem('profile')) && state1===0){
        user = JSON.parse(localStorage.getItem('profile'))
        setId(user.result._id)
        setFname(user.result.fname)
        setLname(user.result.lname)
        setEmail(user.result.email)
        setGender(user.result.gender)
        setCashType(user.result.cashType)
        setCash(user.result.cash)
        setAcc(user.result.acc);
        setState1(1);
    }

    const handlesubmit1 = (e) => {
        e.preventDefault()
        if(!fname||!lname||!email||!gender||!cashType||!cash||!acc)
        {
            alert("Fill all the Details in form")
        }
        else{
            dispatch(Setting({id,fname,lname,email,gender,cashType,cash,acc},navigate,props.displayData))
            close1()
        }
    }

    const close1 = () => {
        props.close("false");
    };

    return (
            <>
                <Dialog id="dialog2" className="dialog" onClick={close1} open>
                </Dialog>
                <Box id="box2" className="box box2">
                    <form id="form1" onSubmit={handlesubmit1}></form>
                    <div style={{width:"100%",float:"right"}}>
                    <button className="btn1" onClick={close1}>&#10060;</button>
                    </div>
                    <div className="scol">
                        <Text className='text2'>F Name{edit}</Text>
                        <Scol1 className="scol1"> : <input form="form1" value={fname} className="sinput" type="text" name="uname" onChange={(e) => {if(edit) setFname(e.target.value)}}/></Scol1>
                    </div>
                    <div className="scol">
                        <Text className='text2'>L Name{edit}</Text>
                        <Scol1 className="scol1"> : <input form="form1" value={lname} className="sinput" type="text" name="uname" onChange={(e) => {if(edit) setLname(e.target.value)}}/></Scol1>
                    </div>
                    <div className="scol">
                        <Text className='text2'>Email Id</Text>
                        <Scol1 className="scol1"> : <input form="form1" value={email} className="sinput" type="text" name="email" readOnly/></Scol1>
                    </div>
                    <div className="scol">
                        <Text className='text2'>Gender</Text>
                        <Scol1 className="scol1">
                            &ensp;&ensp;
                            <input form="form1" className="sinput" style={{width:"auto"}} type="radio" name="gender" value="male" checked={gender==="male"}  onChange={(e) => {if(edit) setGender(e.target.value)}} />&ensp;Male&ensp;&ensp;
                            <input form="form1" className="sinput" style={{width:"auto"}} type="radio" name="gender" value="female" checked={gender==="female"} onChange={(e) => {if(edit) setGender(e.target.value)}} />&ensp;Female&ensp;
                        </Scol1>
                    </div>
                    <div className="scol">
                        <Text className='text2'>Cash</Text>
                        <Scol1 className="scol1"> : <input form="form1" className="sinput" type="number" name="cash" value={cash}  onChange={(e) => {if(edit) setCash(e.target.value)}} />
                        </Scol1>
                    </div>
                    <div className="scol">
                        <Text className='text2'>Account</Text>
                        <Scol1 className="scol1"> : <input form="form1" className="sinput" type="number" name="acc" value={acc}  onChange={(e) => {if(edit) setAcc(e.target.value)}} />
                        </Scol1>
                    </div>
                    <div className="scol">
                        <Text className='text2'>Curreny</Text>
                        <Scol1 className="scol1"> :&ensp;
                            <select form="form1" className="sinput" value={cashType} onChange={(e) => {if(edit) setCashType(e.target.value)}}>
                                <option value="&#x20B9;">&#x20B9; Rupees</option>
                                <option value="&#36;">&#36; Dollars</option>
                                <option value="&euro;">&euro; Euros</option>
                                <option value="&#163;">&#163; Pound</option>    
                            </select>
                        </Scol1>
                    </div>
                    <center>
                        <div className='scol3'>
                            {
                                !edit && 
                                <div style={{margin:"0px auto",position: "relative"}}>
                                    <input type="button" className="button-33" name="Edit" value="EDIT" onClick={() => setEdit(true)}/>
                                </div>
                            }
                            {
                                edit && <>
                                <div style={{float:"left",position: "relative"}}>
                                    <input form="form1" type="submit" className="button-33" style={{backgroundColor:"green"}} value="Save"/>
                                </div>
                                <div style={{float:"right",position: "relative"}}>
                                    <input type="button" className="button-33" style={{backgroundColor:"red"}} value="Back" onClick={() => {setEdit(false); setState1(0);}}/>
                                </div>
                                </>
                            }
                            
                        </div>
                    </center>
                </Box>
            </>
        )   
}

export default Settings
