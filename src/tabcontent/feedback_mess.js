import React from "react"

const Feedback_mess = (props) => {
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
                            <i className={items.starCount>=1 ? "fa fa-star starss" : "fa fa-star-o stars" }></i>
                            <i className={items.starCount>=2 ? "fa fa-star starss" : "fa fa-star-o stars" }></i>
                            <i className={items.starCount>=3 ? "fa fa-star starss" : "fa fa-star-o stars" }></i>
                            <i className={items.starCount>=4 ? "fa fa-star starss" : "fa fa-star-o stars" }></i>
                            <i className={items.starCount>=5 ? "fa fa-star starss" : "fa fa-star-o stars" }></i>                                
                        </td>
                    </tr>
                    <tr>
                        <td className="Smess">
                            {items.mess}
                        </td>
                    </tr>
                    </>
                ) }
                </tbody>
            </table>
        </div>
        
    )
}



export default Feedback_mess
