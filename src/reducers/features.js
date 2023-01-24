const featureReducer = (state={data:null}, actions ) => {
    switch(actions.type) {
        case "FEATURES_DATA" : 
            return { ...state,data: actions.payload}
        case "FEATURES_SETTING_DATA" : 
            localStorage.clear()
            localStorage.setItem('profile',JSON.stringify({ ...actions?.data}))
            return { ...state,data: actions.payload}    
        case "DISPLAY_DATA" : 
            return { ...state,data: actions.payload} 
        default :
            return state
    }
}

export default featureReducer