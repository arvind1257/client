import React from "react"
import "../main.css"
import "../slide.css"
import "../fontawesome.css"
import {useState} from "react"
import Mess from "./contact/query_mess"
import Mess1 from "./contact/feedback_mess"
//eslint-disable-next-line
import Chart from "chart.js/auto";
import { Text1, Switch, Slide, Contact, Message, Search } from "../mediaQuery/mediaQuery"
const Tabcontent = (props) => {
    const user = props.user
    const [contact, setContact] = useState("query");
    const [checked2,setChecked2] = useState(false);
    var maxValue2 = []
    var feedback1 = []
    var maxValue1 = []
    var query1 = []
    var query = [
        {
            messno: 1,
            Name: "Yeshwanth asdjhaks",
            mess: "You can now view expense-tracker in the browser."
        }, {
            messno: 2,
            Name: "Yeshwanth asdjhaks",
            mess: " Line 12:40:  Parsing error: Unexpected token (12:40)4"
        }, {
            messno: 3,
            Name: "Yeshwanth asdjhaks",
            mess: "To create a production build, use npm run build."
        }, {
            messno: 1,
            Name: "Arvind",
            mess: "Note that the development build is not optimized."
        },
    ]

    var feedback = [
        {
            messno: 1,
            Name: "Yeshwanth asdjhaks",
            mess: "You can now view expense-tracker in the browser."
        }, {
            messno: 2,
            Name: "Yeshwanth asdjhaks",
            mess: " Line 12:40:  Parsing error: Unexpected token (12:40)4"
        }, {
            messno: 3,
            Name: "Yeshwanth asdjhaks",
            mess: "To create a production build, use npm run build."
        }, {
            messno: 4,
            Name: "Arvind",
            mess: "Note that the development build is not optimized."
        },
    ]
    const [feedback2,setFeedback2] = useState(feedback)
    const [query2, setQuery2] = useState(query)

    const close1 = () => {
        if (contact === "query") {
            setContact("feedback")
        } else {
            setContact("query")
        }
    };

    function isCheck1(items) {
        if (items.mess.includes(document.getElementById("mySearch2").value)) {
            maxValue2.push(items.messno)
            return true
        } else {
            return false
        } 
    }

    function isCheck(items) {
        if (items.mess.includes(document.getElementById("mySearch1").value)) {
            maxValue1.push(items.messno)
            return true
        } else if (maxValue1.indexOf(items.messno) !== -1) {
            return true
        } else {
            return false
        }
    }

    function isSet(items) {
        var flag = 0
        for (let i = 0; i < maxValue1.length; i++) {
            if (items.messno === maxValue1[i]) {
                flag = 1
                return true
            }
        }
        if (flag === 0) {
            return false
        }
    }

    const click = () => {
        maxValue1 = []
        query1 = []
        query.filter(isCheck)
        setQuery2(query.filter(isSet))
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

    query2.map((items) => {
        if (maxValue1.indexOf(items.messno) === -1) {
            maxValue1.push(items.messno)
        }
        return items
    })
    
    for (let i = 0; i <maxValue1.length; i++) {
        query1.push(<Mess user={user} id={maxValue1[i]} data={query2}/>)
    }

        return (
            <div className="tabcontent1 center" id="contact">
                <div className="r_header">
                    <Text1 className="text1">
                        Enquery&ensp;<i className="fa fa-comments-o" aria-hidden="true"></i>
                    </Text1>
                    &ensp;&ensp;
                    <Switch className="switch">
                    <input onClick={close1} onChange={() => setChecked2(!checked2)} defaultChecked={checked2} type="checkbox"/>
                        <Slide className="slider"></Slide>
                    </Switch>
                    &ensp;&ensp;
                    <Text1 className="text1">
                        <i className="fas fa-pen-square"></i>&ensp;Feedback
                    </Text1>
                </div>
                {
                contact === "query" && (
                    <Contact id="query" className="contact">
                        <div className="question" style={{float: "left"}}>
                            <label htmlFor="enquiry">Post your Questions :</label>
                            <br/>
                            <textarea name="enquiry" rows="4" cols="60"></textarea>
                            <div className="form__group field3">
                                <input type="submit" className="button-33 field4" value="POST"/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Message key={1} id="message1" className="message">
                            <div className="search1">
                                Posted Questions :
                                <Search className="search" type="search" id="mySearch1" name="search1" onKeyUp={click} placeholder="Search.."/>
                            </div>
                            {
                            maxValue1.map((items) => {
                                return <Mess user={user} id={items} data={query2}/>
                            })
                            }
                        </Message>
                    </Contact>
                )
            }
                {
                contact === "feedback" && (
                    <Contact id="feedback" className="contact">
                        <div className="question">
                            <lable htmlFor="feedback">Post your Feedback :</lable>
                            <br/><textarea name="feedback" rows="4" cols="60"></textarea>
                            <div className="form__group field3">
                                <input type="submit" className="button-33 field4" value="POST"/>
                            </div>
                        </div>
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
                            maxValue2.map((items) => {
                                return <Mess1 user={user} id={items} data={feedback2}/>
                            })
                            }
                        </div>
                    </Contact>
                )
            }
            </div>
        )
}

export default Tabcontent
