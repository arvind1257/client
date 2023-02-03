import React from "react"
import "../main.css"
import "../slide.css"
import "../fontawesome.css"
import {useState} from "react"
import Mess1 from "./feedback_mess"
import { PostFeedback } from "../actions/contact"
import { useNavigate, useLocation } from "react-router-dom" 
import { useDispatch, useSelector } from "react-redux"
import { Contact } from "../mediaQuery/mediaQuery"
const Tabcontent = (props) => {
    const user = props.user
    const [textFeedback, setTextFeedback] = useState("")
    var maxValue2 = []
    var feedback1 = []
    const [feedback, setFeedback] = useState([{}])
    const [feedback2,setFeedback2] = useState([{}])
    const items = useSelector(state => state.contactReducer)
    if(items.data && items.data!==null && feedback.length===0){
        setFeedback(items.data)
        setFeedback2(items.data)
    }
    console.log(feedback)
    function isCheck1(items) {
        if (items.mess.includes(document.getElementById("mySearch2").value)) {
            maxValue2.push(items.messno)
            return true
        } else {
            return false
        } 
    }

    const click1 = () => {
        maxValue2 = []
        feedback1 = [] 
        setFeedback2(feedback.filter(isCheck1))
    }

    feedback2.map((items) => {
        if(maxValue2.indexOf(items.messno) === -1){
            maxValue2.push(items.messno)
        }
        return items
    })

    for (let i = 0; i < maxValue2.length; i++) {
        feedback1.push (<Mess1 user={user} id={maxValue2[i]} data={feedback2}/>)
    }

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    if(location.state){
        console.log(location.state.display)
        if(location.state.display===false && textFeedback!=="")
        {
            setTextFeedback("")
            setFeedback([])
            navigate('/contact',{state:null})
        }
    }

    const handlefunction = (e) => {
        e.preventDefault()
        if(!textFeedback)
        {
            alert("Message can't be Empty");
        }
        else{
            dispatch(PostFeedback({mess:textFeedback,id:user.result._id,name:user.result.name},navigate))
        }

    }

        return (
            <div className="tabcontent1 center" id="contact">
                <Contact id="feedback" className="contact">
                    <form onSubmit={handlefunction}>
                        <div className="question">
                            <label htmlFor="feedback">Post your Feedback :</label>
                            <br/><textarea value={textFeedback} onChange={(e) => setTextFeedback(e.target.value)} name="feedback" rows="4" cols="60"></textarea>
                            <div className="form__group field3">
                                <input type="submit" className="button-33 field4" value="POST"/>
                            </div>
                        </div>
                    </form>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div id="message2" className="message">
                            <div className="search1">
                                Posted Feedbacks :
                                <input className="search" type="search" id="mySearch2" name="search2" onKeyUp={click1} placeholder="Search.."/>
                            </div>
                            {
                                maxValue2.map((items,i) => {
                                    return <Mess1 key={i} user={user} id={items} data={feedback2}/>
                                })
                            }
                        </div>
                    </Contact>
                
            </div>
        )
}

export default Tabcontent
