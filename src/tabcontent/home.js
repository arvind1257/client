import React, {useState, useEffect} from "react"
import "../main.css"
import "../slide.css"
import "../fontawesome.css"
//eslint-disable-next-line
import Chart from "chart.js/auto";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { format } from "date-fns"
import "bootstrap/dist/css/bootstrap.min.css"
import { Table } from "react-bootstrap"
import { Delete } from "../actions/features";
import Modify from "../dialogBox/modify"
import { Home1, Atext, SPAN, Tab, Tablemain } from "../mediaQuery/mediaQuery"
import Pagination from "./pagination";

const Home = (props) => {  
    var ecash = 0
    var ebank = 0
    var icash = 0
    var ibank = 0
    var amounts = []
    var totalpage = 0
    var indexoflast = 0
    var indexoffirst = 0
    const pageNumbers = []
    const user = props.user
    const itemsPerPage = 10
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    const [index, setIndex] = useState(0)
    const [display,setDisplay] = useState("false")
    const [currentPage,setCurrentPage] = useState(1);
    const items = useSelector(state => state.featureReducer)
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])

    if(items.data && items.data!==null){
        totalpage = items.data.length
        indexoflast = currentPage * itemsPerPage;
        indexoffirst = indexoflast - itemsPerPage;
        amounts = items.data.slice(indexoffirst,indexoflast)
        for (let i = 1; i <= Math.ceil(totalpage / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
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
    }, [currentPage])

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


    const deleteAmount = (index) => {
        let amount = items.data[index]
        let confirm = window.confirm("Do you want to delete this item!\n"+amount.note);
        if(confirm){
            dispatch(Delete({id:amount._id},navigate,{id:user.result._id}));
        }
    } 


   
    const modifyAmount = (index) => {
        setDisplay("true")
        setIndex(index)
    }
    const close = (data) =>{
        setDisplay(data)
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
                                amounts.map((item, i) => (
                                    <tr key={i}>    
                                        <td style={{textAlign:"center"}}>{ indexoffirst+i+1
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
                                            <button className="action" onClick={() => modifyAmount(indexoffirst+i)}>
                                                <i className="fas edit fa-pencil-alt"></i>
                                            </button>
                                            /
                                            <button className="action" onClick={() => deleteAmount(indexoffirst+i)}>
                                                <i className="fas trash fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    ))}</>
                                }
                                 </tbody>
                        </Table>
                    </Tablemain>
                    <Pagination modifiedPage={arrOfCurrButtons} originalPage={pageNumbers} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
                </Home1>
                { display==="true" &&
                    <Modify name="Adding" data={items.data[index]} displayData={{id:user.result._id}} display={display} close={close}/>
                }
            </div>
        )
}

export default Home
