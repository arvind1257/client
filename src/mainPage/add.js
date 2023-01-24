
import "../main.css"
import Dialog from '../dialogBox/amount'
import React ,{useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {

    var displayData = {}
    const location = useLocation()
    const navigate = useNavigate()
    const [display,setDisplay] = useState("false")
   
    const open = () => {
            setDisplay("true")
    }
    const close = (data) =>{
        setDisplay(data)
    }

    useEffect(() => {
        displayData.id=sessionStorage.getItem("userId")
    })

    if(location.state)
    {
        if(location.state.display==="false" && location.state.close==="Adding" && display==="true")
        {
            close("false")
            navigate('/home',{state:null})
        }
    }
    return (
        <>
            <div className='add'>
                <button className='abtn' onClick={open}><i className="fas fas2 fa-plus"></i></button>
            </div>
            { display==="true" && 
                <Dialog name="Adding" displayData={displayData} display={display} close={close}/>
            }
        </>
    )
}

export default Add
