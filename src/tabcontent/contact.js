import React from "react"
import "../main.css"
import "../slide.css"
import "../fontawesome.css"
import {useState} from "react"
import moment from "moment";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { PostMessage,DeleteMessage } from "../actions/contact"
import { useNavigate, useLocation } from "react-router-dom" 
import { useDispatch } from "react-redux"
import { Contact } from "../mediaQuery/mediaQuery"
const Tabcontent = (props) => {
    const [user,setUser] = React.useState(props.user);
    const [textMessage, setTextMessage] = useState("")
    var toolbarOptions = [[{ 'list': 'bullet' }, 'bold', 'italic', 'underline', { 'list': 'ordered' }, 'link']];
    const module = {
        toolbar: toolbarOptions,
    };

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

        
    if(location.state){
        if(location.state.display===false && user.result.message.length!==JSON.parse(localStorage.getItem("profile")).result.message.length )
        {
            setUser(JSON.parse(localStorage.getItem("profile")))
            setTextMessage("")
            navigate('/contact',{state:null})
        }
    }

    const handlefunction = () => {
        if(!textMessage)
        {
            alert("Message can't be Empty");
        }
        else{
            dispatch(PostMessage({mess:textMessage,id:user.result._id},navigate))
        }

    }

    const handleDelete = (id) =>{
        console.log({_id:user.result._id,id})
        dispatch(DeleteMessage({_id:user.result._id,id},navigate));
    }

    console.log(textMessage)

    console.log(location);
    

        return (
            <div className="tabcontent1 center" id="contact">
                <Contact id="message" className="contact">
                        <div className="question">
                            <label htmlFor="mesaage">Post your Notes :</label>
                            <br/>
                            <ReactQuill style={{backgroundColor:"white"}} onChange={(e) => setTextMessage(e)} theme="snow" modules={module} value={textMessage} />
                                        
                            <div className="form__group field3">
                                <input type="button" onClick={()=>handlefunction()} className="button-33 field4" value="POST"/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div id="message2" className="message">
                            <div className="search1">
                                Posted Message :
                            </div>
                            
                            { user.result.message.map((items) => 
                            <div key={items._id} className="mess">
                                <table style={{ borderCollapse: "collapse", width: "100%" }} cellPadding="10px">
                                    <tbody>
                                        <tr>
                                            <td className="Smess" colSpan={2}>
                                            <div style={{lineHeight: "0.5em"}} className='message-description' dangerouslySetInnerHTML={{ __html: items.mess }} />{}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left">{moment(items.postedOn).format("MMMM DD,YYYY HH:mm:ss")}</td>
                                            <td align="right"><button onClick={()=>handleDelete(items._id)} style={{border:"none",backgroundColor:"inherit",color:"gray",cursor:"pointer"}}>Delete</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                            
                            ) }
                        </div>
                    </Contact>
                
            </div>
        )
}

export default Tabcontent
