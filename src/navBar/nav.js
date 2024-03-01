import "./nav.css"
import "../fontawesome.css"
import React, { useState } from 'react'
import Dialog from '../dialogBox/setting';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Bar1, Bar2, Bar3, Nav1, Link1, Span, I } from "../mediaQuery/mediaQuery";


const MyFunction = () => {
    document.getElementById('x').classList.toggle("change");
    document.getElementById('navbar').classList.toggle("changewidth");
}

const Nav = () =>{

    const navigate = useNavigate();
    const [display,setDisplay] = useState("false")
    
    const open2 = () => {
            setDisplay("true")
    }
    const close = (data) =>{
        setDisplay(data)
    }
    const logout = () => {
        localStorage.clear()
        sessionStorage.clear()
        navigate('/',{state:{message:false}});
    }

    return (
        <>
            <Button id="x" className="container1" onClick={MyFunction}>
                <Bar1 className="bar1"></Bar1>
                <Bar2 className="bar2"></Bar2>
                <Bar3 className="bar3"></Bar3>
            </Button>
            <Nav1 style={{position:"fixed"}} id="navbar" className="navbar" value="open">
                <ul>
                    <li>
                        <Link className="nolink" to="/home">
                            <Link1 className="link">
                                <I className="fas fas1 fa-home"></I>
                                <Span className="nav-item">Home</Span>
                            </Link1>
                        </Link>
                    </li>
                    <li>
                        <Link className="nolink" to="/filter">
                            <Link1 className="link">
                                <I className="fas fas1 fa-filter"></I>
                                <Span className="nav-item">Filter</Span>
                            </Link1>
                        </Link>
                    </li>
                    <li>
                        <button style={{left:"-2px",position:"relative",border:"none",backgroundColor:"#fce80a"}} onClick={() => open2()}>
                            <Link1 className="btn10">
                                <I className="fas fas1 fa-gear"></I>
                                <Span className="nav-item">Settings</Span>
                            </Link1>
                        </button>
                    </li>
                    <li>
                        <Link className="nolink" to="/contact">
                            <Link1 className="link">
                                <I className="fas fas1 fa-envelope"></I>
                                <Span className="nav-item">Contact</Span>
                            </Link1>
                        </Link>
                    </li>            
                </ul>
                <ul>
                    <li>
                        <button style={{left:"-2px",position:"relative",border:"none",backgroundColor:"#fce80a"}} onClick={() => logout()}>
                            <Link1 className="link1">
                                <I className="fas fa-sign-out-alt fas1" aria-hidden="true"></I>
                                <Span className="nav-item">Logout</Span>
                            </Link1>
                        </button>
                    </li>
                </ul>
            </Nav1>
            {
                display==="true" && 
                <Dialog displayData={{'id':sessionStorage.getItem("userId")}} display={display} close={close}/>
            }
            
        </>
    ) 
}

export default Nav;
