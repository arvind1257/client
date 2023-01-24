import React from "react"
import "../main.css"
import "../slide.css"
import "../fontawesome.css"
//eslint-disable-next-line
import Chart from "chart.js/auto";
import { useSelector } from "react-redux"
import { format } from "date-fns"
import { Tablemain, Fheader } from "../mediaQuery/mediaQuery"
const Tabcontent = (props) => {
    const user = props.user
    const items = useSelector(state => state.featureReducer)
    /*var ecash = 0;
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
    }*/
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
                            <tfoot>
                                <tr>
                                    <td colSpan="6">Expense :  </td>
                                </tr>
                            </tfoot>
                        </table>
                    </Tablemain>
                </center>
            </div>
        )
}

export default Tabcontent
