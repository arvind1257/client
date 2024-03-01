const contactReducer = (state={data:null}, actions ) => {
    switch(actions.type) {
        case "DISPLAY_POST_MESSAGE" : 
           return { ...state,data: actions.payload}   
        default :
            return state;
    }
}

export default contactReducer