
import "./dialog.css"
import React,{useState} from "react";
import { Add } from '../actions/features'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dialog, Box } from "../mediaQuery/mediaQuery"

const Amount = (props) => {

    var currDate = new Date()
    var curr = currDate.getFullYear()+"-"+(parseInt(currDate.getMonth())+1)+"-"+currDate.getDate()
    var minDate = currDate.getFullYear()+"-"+(parseInt(currDate.getMonth())+1)+"-01"
    
    const id = sessionStorage.getItem('userId')
    const [note,setNote] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('curr')
    const [mode,setMode] = useState('home')
    const [type,setType] = useState('cash')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault()
        if(!note||!amount||!date||!mode||!type)
        {
            alert("Fill all the Details in form")
        }
        else{
            dispatch(Add({id,note,amount,type,date,mode},navigate,props.displayData))
        }

    }
    
    const close1 = () => {
        props.close("false");
    };

    return(
            <>
                <Dialog id="dialog2" className="dialog" onClick={close1} open>
                </Dialog>
                    <Box id="box1" className="box">
                        <div style={{width:"100%",float:"right"}}>
                        <button className="btn1" onClick={close1} >&#10060;</button>
                        </div>
                        <form onSubmit={handlesubmit}>
                        <table className="tdialog">
                            <tbody>
                            <tr>
                                <td colSpan="2">
                                    <center>
                                    <div className="form__group field1 center" style={{marginTop:"-10px"}}>
                                        <input type="text" className="form__field" placeholder="Note" name="note" id='note' onChange={(e) => setNote(e.target.value)} required />
                                        <label htmlFor="note" className="form__label">Note</label>
                                    </div>
                                    </center>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                <center>
                                    <div className="form__group field center">
                                        <input type="text" className="form__field" placeholder="Amount" name="amount" id='amount' onChange={(e) => setAmount(e.target.value)} required />
                                        <label htmlFor="amount" className="form__label">Amount</label>
                                    </div>
                                </center>    
                                </td>
                                <td >
                                <center>
                                    <div className="form__group field center">
                                        <select className="form__field" name="type" id='type' onChange={(e) => setType(e.target.value)} required >
                                            <option value="cash">CASH</option>
                                            <option value="account">ACCOUNT</option>
                                        </select>
                                        <label htmlFor="type" className="form__label">Type</label>
                                    </div>
                                </center>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                <center>
                                    <div className="form__group field center">
                                        <input type="date" className="form__field" placeholder="Date" name="date" id='date' min={minDate} max={curr} onChange={(e) => setDate(e.target.value)} required />
                                        <label htmlFor="date" className="form__label">Date</label>
                                    </div>
                                </center>
                                </td>
                                <td >
                                    <center>
                                    <div className="form__group field center">
                                        <select className="form__field" name="mode1" id='mode1' onChange={(e) => setMode(e.target.value)} required >
                                            <option value="home">HOME EXPENSE</option>
                                            <option value="self">SELF EXPENSE</option>
                                            <option value="income">INCOME</option>
                                        </select>
                                        <label htmlFor="mode1" className="form__label">Mode</label>
                                    </div>
                                    </center>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <center>
                                        <div className="form__group field2 center">
                                            <button className="button-33" >ADD</button>
                                        </div>
                                    </center>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </form>
                    </Box>
            </>
        )
}

export default Amount
