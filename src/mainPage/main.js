
import Nav from "../navBar/nav";
import Add from "./add";
import Header from "./header";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Display } from "../actions/features";
import NewUser from "../tabcontent/newUser";
import Home from "../tabcontent/home";
import Filter from "../tabcontent/filter";
import Contact from "../tabcontent/contact";
import { DisplayPost } from "../actions/contact"
import { useLocation, useNavigate } from "react-router-dom";

const Main = () => {

    var user = JSON.parse(localStorage.getItem("profile"));
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    });
    useEffect(() => {
        dispatch(Display({id: sessionStorage.getItem("userId")}));
        dispatch(DisplayPost())
    }, [dispatch]);

    return (
        <>
        { user.result && user.result.userType === "First Login" && <NewUser id="First"/> }        
        { location.pathname === "/home" && <Home user={user}/> }      
        { location.pathname === "/filter" && <Filter user={user}/> }  
        { location.pathname === "/contact" && <Contact user={user}/> }  
        <Nav/>
        <Header name="withLogout"/>
        <Add/>
        </>
    );
};

export default Main;
