import React from "react"
import "../main.css"
import "../slide.css"
import "../fontawesome.css"
import {useState} from "react"
import Mess from "./contact/query_mess"
import Mess1 from "./contact/feedback_mess"
//eslint-disable-next-line
import Chart from "chart.js/auto";
import {Line} from "react-chartjs-2"
import { useDispatch, useSelector } from "react-redux"
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"
import { newUser } from "../actions/auth.js"
import { Home1, Atext, SPAN, Tab, Tablemain, Fheader, Text1, Switch, Slide, Contact, Message, Search } from "../mediaQuery/mediaQuery"

const Tabcontent = (props) => {
    var user = {}
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if(JSON.parse(localStorage.getItem('profile'))){
        user = JSON.parse(localStorage.getItem('profile'))
    }
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June"
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [
                    0,
                    10,
                    5,
                    2,
                    20,
                    30,
                    45
                ]
            }, {
                label: "My Second dataset",
                backgroundColor: "rgb(99, 255, 132)",
                borderColor: "rgb(99, 255, 132)",
                data: [
                    10,
                    20,
                    15,
                    12,
                    30,
                    40,
                    55
                ]
            },

        ]
    };
    const [report, setReport] = useState("table");
    const [contact, setContact] = useState("query");
    const [checked1,setChecked1] = useState(false);
    const [checked2,setChecked2] = useState(false);

    const close = () => {
        if (report === "table") {
            setReport("graph")
        } else {
            setReport("table")
        }
    };

    const close1 = () => {
        if (contact === "query") {
            setContact("feedback")
        } else {
            setContact("query")
        }
    };

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
    var maxValue2 = []
    var feedback1 = []

    const [query2, setQuery2] = useState(query)
    var maxValue1 = []
    var query1 = []

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
        feedback1.push (<Mess1 id={maxValue2[i]} data={feedback2}/>)
    }

    query2.map((items) => {
        if (maxValue1.indexOf(items.messno) === -1) {
            maxValue1.push(items.messno)
        }
        return items
    })
    for (let i = 0; i < maxValue1.length; i++) {
        query1.push(<Mess id={maxValue1[i]} data={query2}/>)
    }
    const items = useSelector(state => state.featureReducer)
    var ecash = 0;
    var ebank = 0;
    var icash = 0;
    var ibank = 0;
    if(items.data && items.data!==null){
        items.data.map((item) =>{
            if(item.mode==="income"){
                if(item.type==="cash") icash += parseInt(item.amount)
                else ibank += parseInt(item.amount)
            }
            else{
                if(item.type==="cash") ecash += parseInt(item.amount)
                else ebank += parseInt(item.amount)
            }
            return ''
        })
    }
    const handleSubmit = () => {
        dispatch(newUser(user.result,navigate))
    }
    if (props.id === "First"){
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
    else if (props.id === "Home") {
        return (
            !items.data || items.data===null ? 
            <><div className="ani1"></div>
            <div className="ani2">
              <div className="ani3">Loading...</div>
              <div><img src="coin.png" id="img1" alt="no"/><img id="move" src="coin.png" alt="no"/><img id="move1" src="coin.png" alt="no"/><img id="move2" src="coin.png" alt="no"/><img src="icon1.png" id="img2" alt="no"/> </div>
            </div></> :
            <div className="tabcontent1 center" id="home">
                <Home1 className="home1">
                    <Atext className="atext center">
                        <span className="newtitle"><b>EXPENSE</b></span><br/>
                        <SPAN>
                            <i className="fa fa1 fa-money"></i>:
                            <span className="amount">&#8377;{ecash}</span>
                        </SPAN>
                        &ensp;
                        <SPAN>
                            <i className="fa fa1 fa-bank"></i>:
                            <span className="amount">&#8377;{ebank}</span>
                        </SPAN>
                    </Atext>
                    <Atext className="atext center">
                        <span className="newtitle"><b>INCOME</b></span><br/>
                        <SPAN>
                            <i className="fa fa1 fa-money"></i>:
                            <span className="amount">&#8377;{icash}</span>
                        </SPAN>
                        &ensp;
                        <SPAN>
                            <i className="fa fa1 fa-bank"></i>:
                            <span className="amount">&#8377;{ibank}</span>
                        </SPAN>
                    </Atext>
                </Home1>
                <Home1 className="home1">
                    <Tab className="tab">
                        <span className="color yellow">&ensp;&ensp;</span>
                        <span className="content">: Home Expense</span>
                    </Tab>
                    <Tab className="tab">
                        <span className="color red">&ensp;&ensp;</span>
                        <span className="content">: Self Expense</span>
                    </Tab>
                    <Tab className="tab">
                        <span className="color green">&ensp;&ensp;</span>
                        <span className="content">: Income</span>
                    </Tab>
                    <Tablemain className="tablemain">
                        <table className="tablestyle center">
                            <thead>
                                <tr>
                                    <th>Sno</th>
                                    <th>Date</th>
                                    <th>Note</th>
                                    <th>Mode</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {
                                !items.data || items.data===null ? <tr><td>Loading</td></tr> : <>{
                                items.data.map((item, i) => (
                                    <tr key={i}>    
                                        <td>{ i+1
                                        }</td>
                                        <td>{
                                            format(new Date(item.date),"dd MMM, yyyy")
                                        }</td>
                                        <td>{
                                            item.note
                                        }</td>
                                        <td>{
                                            item.type
                                        }</td>
                                        <td>
                                            { item.mode==="self" && 
                                                <font color="red">
                                                    <b>{user.result.cashType}{item.amount}</b>
                                                </font> 
                                            }
                                            { item.mode==="home" && 
                                                <font color="#ffc800">
                                                    <b>{user.result.cashType}{item.amount}</b>
                                                </font> 
                                            }
                                            { item.mode==="income" && 
                                                <font color="green">
                                                    <b>{user.result.cashType}{item.amount}</b>
                                                </font> 
                                            }
                                        </td>
                                        <td>
                                            <button className="action">
                                                <i className="fas edit fa-pencil-alt"></i>
                                            </button>
                                            /
                                            <button className="action">
                                                <i className="fas trash fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    ))}</>
                                }
                                 </tbody>
                        </table>
                    </Tablemain>
                </Home1>
            </div>
        )
    } else if (props.id === "Filter") {
        return (
            !items.data || items.data===null ? 
            <><div className="ani1"></div>
            <div className="ani2">
              <div className="ani3">Loading...</div>
              <div><img src="coin.png" id="img1" alt="no"/><img id="move" src="coin.png" alt="no"/><img id="move1" src="coin.png" alt="no"/><img id="move2" src="coin.png" alt="no"/><img src="icon1.png" id="img2" alt="no"/> </div>
            </div></> :
            <div className="tabcontent1 center" id="filter"
                style={{float: "left"}}>
                <br/>
                <Fheader className="f_header">
                    <tbody>
                    <tr>
                        <td style={
                            {width: "50%"}
                        }>
                            <div className="form__group field1">
                                <input type="month" className="form__field" name="from" id="from" required/>
                                <label htmlFor="from" className="form__label">
                                    From
                                </label>
                            </div>
                        </td>
                        <td style={
                            {width: "50%"}
                        }>
                            <div className="form__group field1">
                                <input type="month" className="form__field" name="to" id="to" required/>
                                <label htmlFor="to" className="form__label">
                                    To
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="form__group field">
                                <select className="form__field" name="mode1" id="mode1" required>
                                    <option value="home">HOME EXPENSE</option>
                                    <option value="self">SELF EXPENSE</option>
                                    <option value="home">INCOME</option>
                                </select>
                                <label htmlFor="mode1" className="form__label">
                                    Mode
                                </label>
                            </div>
                        </td>
                        <td>
                            <div className="form__group field2">
                                <input type="submit" className="button-33" value="ADD"/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </Fheader>
                <br/>
                <center>
                    <Tablemain className="home1 tablemain">
                        <table className="tablestyle center">
                            <thead>
                                <tr>
                                    <th>Sno</th>
                                    <th>Date</th>
                                    <th>Note</th>
                                    <th>Mode</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                            {
                                !items.data || items.data===null ? <tr><td>Loading</td></tr> : <>{
                                items.data.map((item, i) => (
                                    <tr key={i}>    
                                        <td>{ i+1
                                        }</td>
                                        <td>{
                                            format(new Date(item.date),"dd MMM, yyyy")
                                        }</td>
                                        <td>{
                                            item.note
                                        }</td>
                                        <td>{
                                            item.type
                                        }</td>
                                        <td>
                                            <font color="#ffc800">
                                                <b>&#8377;{
                                                    item.amount
                                                }</b>
                                            </font>
                                        </td>
                                        <td>
                                            <button className="action">
                                                <i className="fas edit fa-pencil-alt"></i>
                                            </button>
                                            /
                                            <button className="action">
                                                <i className="fas trash fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    ))}
                                </>
                            }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>CASH</td>
                                    <td>&#8377;100</td>
                                    <td>Bank</td>
                                    <td>&#8377;0</td>
                                    <td>INCOME</td>
                                    <td>&#8377;0</td>
                                </tr>
                            </tfoot>
                        </table>
                    </Tablemain>
                </center>
            </div>
        )
    } else if (props.id === "Report") {
        return (
            !items.data || items.data===null ? 
            <><div className="ani1"></div>
            <div className="ani2">
              <div className="ani3">Loading...</div>
              <div><img src="coin.png" id="img1" alt="no"/><img id="move" src="coin.png" alt="no"/><img id="move1" src="coin.png" alt="no"/><img id="move2" src="coin.png" alt="no"/><img src="icon1.png" id="img2" alt="no"/> </div>
            </div></> :
            <div className="tabcontent1 center" id="report">
                <div className="r_header">
                    <Text1 className="text1">
                        Table&ensp;<i className="fa fa-table" aria-hidden="true"></i>
                    </Text1>
                    &ensp;&ensp;
                    <Switch className="switch">
                        <input onClick={close} onChange={() => setChecked1(!checked1)} defaultChecked={checked1} type="checkbox"/>
                        <Slide className="slider"></Slide>
                    </Switch>
                    &ensp;&ensp;
                    <Text1 className="text1">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>&ensp;Graph
                    </Text1>
                </div>
                <center> 
                    {
                    report === "table" && (
                        <Tablemain className="home1 tablemain">
                            <table className="tablestyle center">
                                <thead>
                                    <tr>
                                        <th>Sno</th>
                                        <th>Date</th>
                                        <th>Note</th>
                                        <th>Mode</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                {
                                !items.data || items.data===null ? <tr><td>Loading</td></tr> : <>{
                                items.data.map((item, i) => (
                                    <tr key={i}>    
                                        <td>{ i+1
                                        }</td>
                                        <td>{
                                            format(new Date(item.date),"dd MMM, yyyy")
                                        }</td>
                                        <td>{
                                            item.note
                                        }</td>
                                        <td>{
                                            item.type
                                        }</td>
                                        <td>
                                            <font color="#ffc800">
                                                <b>&#8377;{
                                                    item.amount
                                                }</b>
                                            </font>
                                        </td>
                                        <td>
                                            <button className="action">
                                                <i className="fas edit fa-pencil-alt"></i>
                                            </button>
                                            /
                                            <button className="action">
                                                <i className="fas trash fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    ))}
                                </>
                                }
                                </tbody>
                            </table>
                        </Tablemain>
                    )
                }
                {
                    report === "graph" && (
                        <div className="tablemain">
                            <div id="graph">
                                <Line style={{zIndex:"-1",width: "100%"}} data={data}/>
                            </div>
                        </div>
                    )
                }
                    </center>
            </div>
        )
    } else if (props.id === "Contact") {
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
                            <lable htmlFor="enquiry">Post your Questions :</lable>
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
                        <Message id="message1" className="message">
                            <div className="search1">
                                Posted Questions :
                                <Search className="search" type="search" id="mySearch1" name="search1" onKeyUp={click} placeholder="Search.."/>
                            </div>
                            {query1}
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
                            {feedback1}
                        </div>
                    </Contact>
                )
            }
            </div>
        )
    }
}

export default Tabcontent
