import React from "react"

const Feedback_mess = (props) => {
    const feedback = props.data.filter((items) => items.messno === props.id)
    return (
        <div className="mess">
            <table style={{ borderCollapse: "collapse", width: "100%" }} cellPadding="10px">
                { feedback.map((items) => 
                    <tr>
                        <td className="Sname" style={{ width: "20%" }}>
                            <b>{items.Name}</b>
                        </td>
                        <td style={{ width: "2%" }} className="colan">
                            <b>:&ensp;</b>
                        </td>
                        <td className="Smess">
                            <p>{items.mess}</p>
                        </td>
                    </tr>
                ) }
                
            </table>
        </div>
    )
}

export default Feedback_mess
