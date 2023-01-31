import React, { useState, useEffect } from "react"
import "../main.css"
import "../slide.css"
import "../fontawesome.css"
//eslint-disable-next-line
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css"
import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { format } from "date-fns"
import { Tablemain, Fheader } from "../mediaQuery/mediaQuery"
import DatePicker from "react-datepicker"
import Pagination from "./pagination";
const Tabcontent = (props) => {

    var amounts = []
    var totalpage = 0
    var indexoflast = 0
    var indexoffirst = 0
    const pageNumbers = []
    const itemsPerPage = 10
    const [currentPage,setCurrentPage] = useState(1);
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])
    const user = props.user
    var currDate = new Date()
    var minDate = new Date()
    minDate.setDate(1);
    const [fromDate, setFromDate] = useState(minDate)
    const [toDate, setToDate] = useState(currDate)
    const [mode, setMode] = useState('all') 
    const items = useSelector(state => state.featureReducer)
    var filters = []
    var secash = 0;
    var sebank = 0;
    var hecash = 0;
    var hebank = 0;
    var icash = 0;
    var ibank = 0;
    if(items.data && items.data!==null){
        items.data.map((item) =>{
            
            let date = format(new Date(item.date),"yyyy-MM-dd")
            let date1 = new Date(date)
            if(mode==="all"){
                if(date1.getTime()-fromDate.getTime()>=0 && toDate.getTime()-date1.getTime()>=0)
                {
                    filters.push(item)
                    if(item.mode==="income"){
                        if(item.type==="cash") icash += parseInt(item.amount)
                        else ibank += parseInt(item.amount)
                    }
                    else if(item.mode==="self"){
                        if(item.type==="cash") secash += parseInt(item.amount)
                        else sebank += parseInt(item.amount)
                    }
                    else{
                        if(item.type==="cash") hecash += parseInt(item.amount)
                        else hebank += parseInt(item.amount)
                    }
                }
            }
            else if(mode==="homeSelf" && (item.mode==="home" ||  item.mode==="self")){
                if(date1.getTime()-fromDate.getTime()>=0 && toDate.getTime()-date1.getTime()>=0)
                {
                    filters.push(item)
                    if(item.mode==="self"){
                        if(item.type==="cash") secash += parseInt(item.amount)
                        else sebank += parseInt(item.amount)
                    }
                    else{
                        if(item.type==="cash") hecash += parseInt(item.amount)
                        else hebank += parseInt(item.amount)
                    }
                }
            }
            else if(item.mode===mode ){
                if(date1.getTime()-fromDate.getTime()>=0 && toDate.getTime()-date1.getTime()>=0)
                {
                    filters.push(item)
                    if(item.mode==="income"){
                        if(item.type==="cash") icash += parseInt(item.amount)
                        else ibank += parseInt(item.amount)
                    }
                    else if(item.mode==="self"){
                        if(item.type==="cash") secash += parseInt(item.amount)
                        else sebank += parseInt(item.amount)
                    }
                    else{
                        if(item.type==="cash") hecash += parseInt(item.amount)
                        else hebank += parseInt(item.amount)
                    }
                }
            }
            return item
        })
        totalpage = filters.length
            indexoflast = currentPage * itemsPerPage
            indexoffirst = indexoflast - itemsPerPage
            amounts = filters.slice(indexoffirst,indexoflast)
            for (let i = 1; i <= Math.ceil(totalpage / itemsPerPage); i++) {
                pageNumbers.push(i);
            }
            console.log(pageNumbers)
    }

    //Pagination Process Starts
    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons]
        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...'
    
        if (pageNumbers.length < 6) {
          tempNumberOfPages = pageNumbers
        }
    
        else if (currentPage >= 1 && currentPage <= 3) {
          tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pageNumbers.length]
        }
    
        else if (currentPage === 4) {
          const sliced = pageNumbers.slice(0, 5)
          tempNumberOfPages = [...sliced, dotsInitial, pageNumbers.length]
        }
    
        else if (currentPage > 4 && currentPage < pageNumbers.length - 2) {               // from 5 to 8 -> (10 - 2)
          const sliced1 = pageNumbers.slice(currentPage - 2, currentPage)                 // sliced1 (5-2, 5) -> [4,5] 
          const sliced2 = pageNumbers.slice(currentPage, currentPage + 1)                 // sliced1 (5, 5+1) -> [6]
          tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumbers.length]) // [1, '...', 4, 5, 6, '...', 10]
        }
        
        else if (currentPage > pageNumbers.length - 3) {                 // > 7
          const sliced = pageNumbers.slice(pageNumbers.length - 4)       // slice(10-4) 
          tempNumberOfPages = ([1, dotsLeft, ...sliced])                        
        }
        
        else if (currentPage === dotsInitial) {
          // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3 
          // arrOfCurrButtons[3] = 4 + 1 = 5
          // or 
          // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
          // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
          setCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length-3] + 1) 
        }

        else if (currentPage === dotsRight) {
          setCurrentPage(arrOfCurrButtons[3] + 2)
        }
    
        else if (currentPage === dotsLeft) {
          setCurrentPage(arrOfCurrButtons[3] - 2)
        }
    
        setArrOfCurrButtons(tempNumberOfPages)
        setCurrentPage(currentPage)
        // eslint-disable-next-line
    }, [currentPage,mode,fromDate,toDate])

    const paginate = (pageNum) => {
        setCurrentPage(pageNum);
    }
    const nextPage = () => {
        setCurrentPage(prev => prev >= pageNumbers.length ? prev : prev + 1)
    }
    const prevPage = () => {
        setCurrentPage(prev => prev <= 1 ? prev : prev - 1)
    }
    //Paginations Process Completed
    
    return (
            !items.data || items.data===null ? 
            <><div className="ani1"></div>
            <div className="ani2">
              <div className="ani3">Loading...</div>
              <div><img src="coin.png" id="img1" alt="no"/><img id="move" src="coin.png" alt="no"/><img id="move1" src="coin.png" alt="no"/><img id="move2" src="coin.png" alt="no"/><img src="icon1.png" id="img2" alt="no"/> </div>
            </div></> :
            <div className="tabcontent1 center" id="filter" style={{float: "left"}}>
                <br/>
                <Fheader className="f_header">
                    <tbody>
                    <tr>
                        <td style={
                            {width: "30%"}
                        }>
                            <div className="form__group field1">
                                <DatePicker className="form__field" selected={fromDate} onChange={(date) => setFromDate(date)} maxDate={currDate} dateFormat='dd MMM, yyyy' onKeyDown={(e) =>{ e.preventDefault()}}/>
                                <label htmlFor="from" className="form__label">
                                    From
                                </label>
                            </div>
                        </td>
                        <td style={
                            {width: "30%"}
                        }>
                            <div className="form__group field1">
                                <DatePicker className="form__field" selected={toDate} onChange={(date) => setToDate(date)} minDate={fromDate} maxDate={currDate} dateFormat='dd MMM, yyyy' onKeyDown={(e) =>{ e.preventDefault()}}/>
                                <label htmlFor="to" className="form__label">
                                    To
                                </label>
                            </div>
                        </td>
                        <td style={
                            {width: "40%"}
                        }>
                            <div className="form__group field1">
                                <select className="form__field" name="mode1" id='mode1' onChange={(e) => setMode(e.target.value)} required >
                                    <option value="all">ALL</option>
                                    <option value="income">INCOME</option>
                                    <option value="home">HOME EXPENSE</option>
                                    <option value="self">SELF EXPENSE</option>
                                    <option value="homeSelf">HOME + SELF EXPENSE</option>
                                </select>
                                <label htmlFor="mode1" className="form__label">
                                    Mode
                                </label>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </Fheader>
                <br/>
                
                    <Tablemain className="home1 tablemain">
                        <Table className="tablestyle center" hover>
                            <thead>
                                <tr>
                                    <th>Sno</th>
                                    <th>Date</th>
                                    <th>Note</th>
                                    <th>Mode</th>
                                    <th><span style={{color:"transparent"}}>_</span>Amount<span style={{color:"transparent"}}>_</span></th>
                                </tr>
                            </thead>
                            <tbody> 
                            {
                                !items.data || items.data===null ? <tr><td>Loading</td></tr> : <>{
                                amounts.map((item, i) => (
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
                                                    <b><span style={{float:"left"}}>{user.result.cashType}</span><span style={{float:"right"}}>{item.amount}</span></b>
                                                </font> 
                                            }
                                            { item.mode==="home" && 
                                                <font color="#ffc800">
                                                    <b><span style={{float:"left"}}>{user.result.cashType}</span><span style={{float:"right"}}>{item.amount}</span></b>
                                                </font> 
                                            }
                                            { item.mode==="income" && 
                                                <font color="green">
                                                    <b><span style={{float:"left"}}>{user.result.cashType}</span><span style={{float:"right"}}>{item.amount}</span></b>
                                                </font> 
                                            }
                                        </td>
                                    </tr>
                                    ))}
                                </>
                            }
                            </tbody>
                            <tfoot>
                            {
                                (mode==="all" || mode==="income") &&
                                <>
                                    <tr>
                                        <td colSpan="6">
                                            <div style={{width:"30%",float:"left",fontWeight:"bolder"}}>INCOME</div>
                                            <div style={{width:"35%",float:"left"}}>Cash : {user.result.cashType}{icash}</div>
                                            <div style={{width:"35%",float:"left"}}>UPI : {user.result.cashType}{ibank}</div>
                                        </td>
                                    </tr>
                                </>
                            }
                            {
                                (mode==="homeSelf" || mode==="all" || mode==="self") &&
                                <>
                                    <tr>
                                        <td colSpan="6">
                                            <div style={{width:"30%",float:"left",fontWeight:"bolder"}}>SELF EXPENSE</div>
                                            <div style={{width:"35%",float:"left"}}>Cash : {user.result.cashType}{secash}</div>
                                            <div style={{width:"35%",float:"left"}}>UPI : {user.result.cashType}{sebank}</div>
                                        </td>
                                    </tr>
                                </>
                            }
                            {
                                (mode==="all" || mode==="homeSelf" || mode==="home") && 
                                <>
                                    <tr>
                                        <td colSpan="6">
                                            <div style={{width:"30%",float:"left",fontWeight:"bolder"}}>HOME EXPENSE</div>
                                            <div style={{width:"35%",float:"left"}}>Cash : {user.result.cashType}{hecash}</div>
                                            <div style={{width:"35%",float:"left"}}>UPI : {user.result.cashType}{hebank}</div>
                                        </td>
                                    </tr>
                                </>
                            }
                            </tfoot>
                        </Table>
                        <Pagination modifiedPage={arrOfCurrButtons} originalPage={pageNumbers} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
                
                    </Tablemain>
            </div>
        )
}

export default Tabcontent
