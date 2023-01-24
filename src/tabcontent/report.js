import React from "react"
import "../main.css"
import "../slide.css"
import "../fontawesome.css"
import {useState} from "react"
//eslint-disable-next-line
import Chart from "chart.js/auto";
import {Line} from "react-chartjs-2"
import { useSelector } from "react-redux"
import { format } from "date-fns"
import { Tablemain, Text1, Switch, Slide } from "../mediaQuery/mediaQuery"
const Tabcontent = (props) => {
    const user = props.user
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
    const [checked1,setChecked1] = useState(false);

    const close = () => {
        if (report === "table") {
            setReport("graph")
        } else {
            setReport("table")
        }
    };

    const items = useSelector(state => state.featureReducer)

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
}

export default Tabcontent
