const contactReducer = (state={data:null}, actions ) => {
    switch(actions.type) {
        case "POST_FEEDBACK_MESSAGE" : 
           return { ...state,data: actions?.data}
        case "DISPLAY_POST_MESSAGE" : 
           return { ...state,data: actions.payload}   
        default :
            return state;
    }
}

export default contactReducer