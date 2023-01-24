import "../main.css";
import { Header, Header1 } from "../mediaQuery/mediaQuery";

const main = props =>{
    return (
        <>
        {
            props.name==="withLogout" &&
            <Header1 className="header1">
                &ensp;&ensp;
                EXPENSE TRACKER
            </Header1>
        }
        {
            props.name!=="withLogout" &&
            <Header className="header">
                EXPENSE TRACKER
            </Header>
        }
        </>
    )
};

export default main;