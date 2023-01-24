import React from "react"
import "../main.css"
import "../slide.css"
import "../fontawesome.css"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { newUser } from "../actions/auth.js"
import { Home1 } from "../mediaQuery/mediaQuery"

const NewUser = () => {

    var user = {}
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if(JSON.parse(localStorage.getItem('profile'))){
        user = JSON.parse(localStorage.getItem('profile'))
    }

    const handleSubmit = () => {
        dispatch(newUser(user.result,navigate))
    }

    return (
                <div className="tabcontent1 center" id="First">
                    <Home1 className="home1">
                        <div className="newtitle">
                            <br/>
                            <p><b>Hello { user.result.name },</b></p>
                        </div>
                        <div className="newmess">
                            <br/>
                            <p>Thank You for choosing us</p>
                            <p>Kindly Choose any of the below user type : </p>
                        </div>
                        <div className="newcontent">
                            <div className="newtab" onClick={handleSubmit}>
                                <p className="newsubtitle"><b>Free User</b></p>
                                <p style={{padding:"30px"}}>&#x20B9;<span>0</span>/Lifetime</p>
                                <hr className="line"/><br/>
                                <ul className="tablist">
                                    <li><i style={{color:"yellow"}} className="tick fa fa-check"></i>&ensp;<p>Stores Expense's for 1 month only</p></li>
                                    <li><i style={{color:"yellow"}} className="tick fa fa-check"></i>&ensp;<p>Access to General Report only</p></li>
                                    <li><i style={{color:"red"}} className="tick fa fa-times"></i>&ensp;<p>Download Expense Report</p></li>
                                    <br/><br/>
                                </ul>
                                <br/>
                            </div>
                            <div className="newtab">
                                <p className="newsubtitle"><b>Premium User</b></p>
                                <p style={{padding:"30px"}}>&#x20B9;<span>249</span>/lifetime</p>
                                <hr className="line"/><br/>
                                <ul className="tablist">
                                    <li><i style={{color:"green"}} className="tick fa fa-check"></i>&ensp;<p>Stores Expense's for Lifetime</p></li>
                                    <li><i style={{color:"green"}} className="tick fa fa-check"></i>&ensp;<p>Access to All type of Report</p></li>
                                    <li><i style={{color:"green"}} className="tick fa fa-check"></i>&ensp;<p>Download Expense Report</p></li>
                                </ul>
                                <br/>
                            </div>
                        </div>
                    </Home1>
                </div>
        )
}

export default NewUser
