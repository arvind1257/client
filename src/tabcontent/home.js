import React from "react"
import "../main.css"
import "../slide.css"
import "../fontawesome.css"
//eslint-disable-next-line
import Chart from "chart.js/auto";
import { useSelector } from "react-redux"
import { format } from "date-fns"
import "bootstrap/dist/css/bootstrap.min.css"
import { Table } from "react-bootstrap"
import { Home1, Atext, SPAN, Tab, Tablemain } from "../mediaQuery/mediaQuery"

const Home = (props) => {   
    const items = useSelector(state => state.featureReducer)
    var ecash = 0
    var ebank = 0
    var icash = 0
    var ibank = 0
    const user = props.user

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
                            <span className="amount">{user.result.cashType}{ecash}</span>
                        </SPAN>
                        &ensp;
                        <SPAN className="lh"> 
                            <i className="fa fa1 fa-bank"></i>:
                            <span className="amount">{user.result.cashType}{ebank}</span>
                        </SPAN>
                    </Atext>
                    <Atext className="atext center">
                        <span className="newtitle"><b>INCOME</b></span><br/>
                        <SPAN>
                            <i className="fa fa1 fa-money"></i>:
                            <span className="amount">{user.result.cashType}{icash}</span>
                        </SPAN>
                        &ensp;
                        <SPAN className="lh">
                            <i className="fa fa1 fa-bank"></i>:
                            <span className="amount">{user.result.cashType}{ibank}</span>
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
                        <Table className="tablestyle center" hover>
                            <thead>
                                <tr>
                                    <th align="center">Sno</th>
                                    <th align="center">Date</th>
                                    <th align="left">Note</th>
                                    <th align="center">Mode</th>
                                    <th align="right">Amount</th>
                                    <th align="center">Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {
                                !items.data || items.data===null ? <tr><td>Loading</td></tr> : <>{
                                items.data.map((item, i) => (
                                    <tr key={i}>    
                                        <td style={{textAlign:"center"}}>{ i+1
                                        }</td>
                                        <td style={{textAlign:"center"}}>{
                                            format(new Date(item.date),"dd MMM, yyyy")
                                        }</td>
                                        <td style={{textAlign:"left"}}>{
                                            item.note
                                        }</td>
                                        <td style={{textAlign:"center"}}>{
                                            item.type
                                        }</td>
                                        <td style={{textAlign:"right"}}>
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
                                        <td style={{textAlign:"center"}}>
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
                        </Table>
                    </Tablemain>
                </Home1>
            </div>
        )
}

export default Home
