
import "./dialog.css"
import React,{useState} from "react"
import { Modify } from '../actions/features'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker"
import { format } from "date-fns"
import { Dialog, Box } from "../mediaQuery/mediaQuery"
import "react-datepicker/dist/react-datepicker.css"

const Modifies = (props) => {

    var currDate = new Date()
    var minDate = new Date()
    minDate.setDate(1);

    const id = sessionStorage.getItem('userId')
    const [_id,set_Id] = useState('')
    const [edit,setEdit] = useState(0)
    const [note,setNote] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState(currDate)
    const [mode,setMode] = useState('home')
    const [type,setType] = useState('CASH')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    var date11 = format(new Date(props.data.date),"yyyy-MM-dd")
    if(edit===0) {
        set_Id(props.data._id)
        setNote(props.data.note)
        setAmount(props.data.amount)
        setDate(new Date(date11))
        setMode(props.data.mode)
        setType(props.data.type)
        setEdit(1);
    }
    
    const handlesubmit = (e) => {
        e.preventDefault()
        if(!note||!amount||!mode||!type)
        {
            alert("Fill all the Details in form")
        }
        else{
            dispatch(Modify({_id,id,note,amount,type,date,mode},navigate,props.displayData))
            close1()
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
                                        <input type="text" value={note} className="form__field" placeholder="Note" name="note" id='note' onChange={(e) => setNote(e.target.value)} required />
                                        <label htmlFor="note" className="form__label">Note</label>
                                    </div>
                                    </center>
                                </td>
                            </tr>
                            <tr>
                                <td >
                                <center>
                                    <div className="form__group field center">
                                        <input type="text" value={amount} className="form__field" placeholder="Amount" name="amount" id='amount' onChange={(e) => setAmount(e.target.value)} required />
                                        <label htmlFor="amount" className="form__label">Amount</label>
                                    </div>
                                </center>    
                                </td>
                                <td>
                                <center>
                                    <div className="form__group field center">
                                        <select className="form__field" value={type} name="type" id='type' onChange={(e) => setType(e.target.value)} required >
                                            <option value="CASH">CASH</option>
                                            <option value="UPI/CARD">UPI/CARD</option>
                                        </select>
                                        <label htmlFor="type" className="form__label">Type</label>
                                    </div>
                                </center>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <center>
                                    <div className="form__group field center">
                                        <DatePicker className="form__field" selected={date} onChange={(date) => setDate(date)} minDate={minDate} maxDate={currDate} dateFormat='dd MMM, yyyy' isClearable/>
                                        <label htmlFor="date" className="form__label">Date</label>
                                    </div>
                                </center>
                                </td>
                                <td >
                                    <center>
                                    <div className="form__group field center">
                                        <select className="form__field" value={mode} name="mode1" id='mode1' onChange={(e) => setMode(e.target.value)} required >
                                            <option value="home">HOME EXPENSE</option>
                                            <option value="self">SELF EXPENSE</option>
                                            <option value="income">INCOME</option>
                                            <option value="other">OTHER</option>
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

export default Modifies
