
import "../main.css"
import Dialog from '../dialogBox/amount'
import React ,{useState, useEffect} from 'react'

const Add = () => {

    var displayData = {}
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
