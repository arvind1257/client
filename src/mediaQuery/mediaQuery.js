import Styled from "styled-components";

export const Form = Styled.div`
    @media (max-height: 550px) {
        height:80vh;
        top:17%;    
    }
`;
export const Fieldset = Styled.fieldset`

    &.signup{
        width:40%;
    }
    @media (max-width: 1100px) {
        width:50%;
        &.signup{
            width:55%;
        }
    }
    @media (max-width: 800px) {
        width:60%;
        &.signup{
            width:65%;
        }
    }
    @media (max-width: 600px) {
        width:70%;
        &.signup{
            width:80%;
        }
    }
    @media (max-width: 450px) {
        width:80%;
        &.signup{
            width:92 %;
        }
    }
`;
export const Slink1 = Styled.button`
    @media (max-width: 800px) {
        padding:3px; 
        font-size:30px; 
    }   
    @media (max-width: 450px) {
        padding:3px; 
        font-size:25px; 
    }   
`;
export const Slink2 = Styled.button`
    width:60%;
    @media (max-width: 800px) {
        padding:3px; 
        font-size:30px; 
    }   
    @media (max-width: 450px) {
        padding:3px; 
        font-size:25px; 
    }   
`;
export const Text = Styled.div`
    @media (max-width: 800px) {
        font-size:22px ;
        top:0px;
    }
    @media (max-width: 550px) {
        font-size:20px ;
        top:2px;
    }
    @media (max-width: 450px) {
        &.signup{
            font-size:18px;
        }
    }
`;
export const Scol1 = Styled.div`
    @media (max-width: 800px) {
    width:60%;
    }
`;
export const Dialog = Styled.dialog`
    @media (max-width: 550px) {
        height:110vh;
    }
`;
export const Box = Styled.div`

    @media (max-width: 1100px) {
        left:25%;
        width:50%;
    }
    
    @media (max-width: 800px) {
        left:20%;
        width:67%;
    }
    
    @media (max-width: 600px) {
        left:17%;
        width:75%;
    }
    @media (max-width: 550px) {
        left:12%;
        width:80%;
    }    
    @media (max-height: 750px) { 
        top:25%;
    }
    @media (max-height: 550px) { 
        top:15%;
    }
`;
export const Header = Styled.div`
    @media (max-width: 550px) {
        font-size:25px;
    } 
`;
export const Header1 = Styled.div`
    @media (max-width: 550px) {
        font-size:20px;
    } 
`;
export const Button = Styled.button`
    @media (max-width: 550px) {
        width:33px;
        color:red;
        margin-left: -12px;
        margin-bottom: -10px;
        border:2px groove gray;
    }
`;
export const Bar1 = Styled.div`
    @media (max-width: 550px) {
        width: 17px;
        height: 3px;
        margin:3px 0px;
        transition: 0.4s;
        background-color: #333;
        .change & {
            transform: translate(0, 6px) rotate(-45deg);
        }
    }
`;
export const Bar2 = Styled.div`
    @media (max-width: 550px) {
        width: 17px;
        height: 3px;
        margin:3px 0px;
        transition: 0.4s;
        background-color: #333;
    }
`;
export const Bar3 = Styled.div`
    @media (max-width: 550px) {
        width: 17px;
        height: 3px;
        margin:3px 0px;
        transition: 0.4s;
        background-color: #333;
        .change & {
            transform: translate(0, -6px) rotate(45deg);
        }
    }
`;
export const Nav1 = Styled.nav`
    @media (max-width: 550px) {
        left:-44px;
        width:90px;
        &.changewidth {
            width:180px;
        }
    }
`;
export const Link1 = Styled.div`
    @media (max-width: 550px) {
        height:40px;
    }
`;
export const I = Styled.i`
    @media (max-width: 550px) {
        font-size: 18px;
    }
`;
export const Span = Styled.span`
    @media (max-width: 550px) {
        left: 55px;
        font-size: 15px;
    }
`;
export const Home1 = Styled.div`
        @media (max-width: 1100px) {
            left:7%;
            width:85%;
        }
        @media (max-width: 700px) {
            left:7%;
            width:90%;
        }
    `;
export const SPAN = Styled.span`
    font-size:25px;
    @media (max-width: 1000px) {
        font-size:22px;
        display:block;
        width:100%;
        &.lh{
            margin-top:-40px;
        }
    }
`;
export const Atext = Styled.div`
    @media (max-width: 1100px) {
        font-size:25px;
        font-weight:bold;
    }
    @media (max-width: 700px) {
        font-size:22px;
        font-weight:bold;
    }
    @media (max-width: 550px) {
        font-size:20px;
    }
`;
export const Tablemain = Styled.div`
    @media (max-width: 1100px){
        width:80vw;
            
    }
    @media (max-width: 700px){
        left:4%;position:relative;
        &.home1{
            left:10%;
        }
    }
    @media (max-width: 550px){
        font-size:15px;
        position:relative;
        left:3%;
    }
`;
export const Fheader = Styled.table`
    width:45%;
    @media (max-width: 1100px){
        width:60%;
    }
    @media (max-width: 700px){
        width:70%;
    }
    @media (max-width: 550px){
        width:90%;
    }
`;
export const Text1 = Styled.span`
    @media (max-width: 550px){
        top:5px;
        font-size:23px;
    }
    @media (max-width: 450px){
        font-size:20px;
    }
`;
export const Switch = Styled.label`
    @media (max-width: 550px){
        width: 54px;
        height: 28px;
    }
`;
export const Slide = Styled.span`
    @media (max-width: 550px){
        &:before{
            height: 20px;
            width: 20px;
        }
    }
`;
export const Tab = Styled.div`
    @media (max-width: 550px){
        margin-bottom:10px;
        font-size:10px;
    }
`;
export const Contact = Styled.div`
    @media (max-width: 800px){
        width:90%;
    }
    @media (max-width: 550px){
        width:100%;
    }
`;
export const Message = Styled.div`
    @media (max-width: 800px){
        width:78vw;
        left:0px;
        position:relative;
    }
    @media (max-width: 550px){
        width:110%;
    }
`;
export const Search = Styled.input`
    @media (max-width: 1100px){
        width:20%;
    }
    @media (max-width: 550px){
        left:15%;
        width:25%;
    }
`;
export const Mess = Styled.div`
    @media (max-width: 800px){
        width:85%;
    }
    @media (max-width: 550px){
        width:75%;
        font-size:14px;
        position:relative;
    }
`;