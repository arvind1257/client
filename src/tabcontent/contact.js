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
    const [starCount,setStarCount] = useState(0)
    const items = useSelector(state => state.contactReducer)
    if(items.data && items.data!==null && feedback.length===1 && !feedback[0]._id){

        setFeedback(items.data)
        setFeedback2(items.data)
    }
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

    const setstarCount = (no) => {
        for(let i=1;i<=no;i++)
        {
            document.getElementById("s_"+i).classList.remove("fa-star-o");
            document.getElementById("s_"+i).classList.add("fa-star");
            document.getElementById("s_"+i).style.color="#fce80a";  
        }
        for(let i=no+1;i<=5;i++)
        {
            document.getElementById("s_"+i).classList.remove("fa-star");
            document.getElementById("s_"+i).classList.add("fa-star-o");
            document.getElementById("s_"+i).style.color="black";
        }
        setStarCount(no)        
    }

    if(location.state){
        if(location.state.display===false && textFeedback!=="")
        {
            setTextFeedback("")
            setFeedback([{}])
            setstarCount(0)
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
            dispatch(PostFeedback({mess:textFeedback,id:user.result._id,name:user.result.fname,count:starCount},navigate))
        }

    }

    const colorChange1 = (id) => {
        if(starCount===0){
        for(let i=1;i<=id;i++)
        {
            document.getElementById("s_"+i).classList.remove("fa-star-o");
            document.getElementById("s_"+i).classList.add("fa-star");
            document.getElementById("s_"+i).style.color="#fce80a";
               
        }
        }
    }
    const colorChange2 = (id) => {
        if(starCount===0){
        for(let i=1;i<=id;i++)
        {
            document.getElementById("s_"+i).classList.remove("fa-star");
            document.getElementById("s_"+i).classList.add("fa-star-o");
            document.getElementById("s_"+i).style.color="black";
        }
        }
    }

    

        return (
            <div className="tabcontent1 center" id="contact">
                <Contact id="feedback" className="contact">
                    <form onSubmit={handlefunction}>
                        <div className="question">
                            <label htmlFor="feedback">Post your Feedback :</label>
                            <div className="form__group field3">
                                <i className="fa fa-star-o star" id="s_1" onMouseOver={() => colorChange1(1)} onMouseLeave={() => colorChange2(1)} onClick={() => setstarCount(1)}></i>
                                <i className="fa fa-star-o star" id="s_2" onMouseOver={() => colorChange1(2)} onMouseLeave={() => colorChange2(2)} onClick={() => setstarCount(2)}></i>
                                <i className="fa fa-star-o star" id="s_3" onMouseOver={() => colorChange1(3)} onMouseLeave={() => colorChange2(3)} onClick={() => setstarCount(3)}></i>
                                <i className="fa fa-star-o star" id="s_4" onMouseOver={() => colorChange1(4)} onMouseLeave={() => colorChange2(4)} onClick={() => setstarCount(4)}></i>
                                <i className="fa fa-star-o star" id="s_5" onMouseOver={() => colorChange1(5)} onMouseLeave={() => colorChange2(5)} onClick={() => setstarCount(5)}></i>
                            </div>
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
