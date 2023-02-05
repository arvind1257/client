import React from "react"
import { useNavigate } from "react-router-dom"

const Feedback_mess = (props) => {
    
    const SetStarCount1 = (no,id) => {
        const navigate = useNavigate()
        for(let i=1;i<=no;i++)
        {
            if(document.getElementById(id+""+i))
            {
            document.getElementById(id+""+i).classList.remove("fa-star-o");
            document.getElementById(id+""+i).classList.add("fa-star");
            document.getElementById(id+""+i).style.color="#fce80a";  
            }
            else{
                console.log("hi1")
                navigate('/contact')
            }
        }
        for(let i=no+1;i<=5;i++)
        {
            if(document.getElementById(id+""+i))
            {
            document.getElementById(id+""+i).classList.remove("fa-star");
            document.getElementById(id+""+i).classList.add("fa-star-o");
            document.getElementById(id+""+i).style.color="black";
            }
            else{
                console.log("hi2")
                navigate('/contact')
            }
        }       
    }


    const feedback = props.data.filter((items) => items.messno === props.id)
    return (
        <div className="mess">
            <table style={{ borderCollapse: "collapse", width: "100%" }} cellPadding="10px">
                <tbody>
                { feedback.map((items) => 
                    <>
                    <tr>
                        <td className="Sname">
                            <b>{items.name} : &emsp;</b>
                            <i className="fa fa-star-o stars" id={items.messno+""+1}>1</i>
                            <i className="fa fa-star-o stars" id={items.messno+""+2}>2</i>
                            <i className="fa fa-star-o stars" id={items.messno+""+3}>3</i>
                            <i className="fa fa-star-o stars" id={items.messno+""+4}>4</i>
                            <i className="fa fa-star-o stars" id={items.messno+""+5}>5</i>                                
                        </td>
                    </tr>
                    <tr>
                        <td className="Smess">
                            {items.mess}{SetStarCount1(items.starCount,items.messno)}
                        </td>
                    </tr>
                    {SetStarCount1(items.starCount,items.messno)}
                    </>
                ) }
                </tbody>
            </table>
        </div>
        
    )
}



export default Feedback_mess
