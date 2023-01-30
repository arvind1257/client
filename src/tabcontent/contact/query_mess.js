import { Mess } from "../../mediaQuery/mediaQuery"
import React, { useState } from "react";
import "../../main.css";

const Messages = (props) => {
  const user = props.user
  const query = props.data.filter((items) => items.messno === props.id);
  const [reply, setReply] = useState(false);

  const close = () => {
    if (reply) {
      setReply(false);
    } else {
      setReply(true);
    }
  };
  
  return (
    <Mess className="mess">
      <table style={{ borderCollapse: "collapse", width: "100%" }} cellPadding="10px">
        <tbody>
        {query.map((items, i) => (
          <tr key={i}>
            <td>
              <b>{items.Name}&ensp;:<br></br></b>
              <p>
                {reply.toString}
                {items.mess}
              </p>
            </td>
          </tr>
        ))}
        {!reply && (
          <tr>
            <td colSpan="3" align="right" className="reply">
              <div onClick={close} className="abtn">
                reply
              </div>
            </td>
          </tr>
        )}
        {reply && (
          <tr>
            <td className="Sname">
              <b>{user.result.name}:&ensp;<br/></b>
              <input className="rfield" type="text" name="input_1" />
              <input type="submit" value="submit" />
              &ensp;
              <div onClick={close} className="abtn">
                &#10060;
              </div>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </Mess>
  );
};

export default Messages;
