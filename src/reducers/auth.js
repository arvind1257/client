const authReducer = (state={data:null}, actions ) => {
    switch(actions.type) {
        case "Auth" : 
            localStorage.clear()
            const User = JSON.parse(JSON.stringify({ ...actions?.data}))
            sessionStorage.setItem('userId',User.result._id)
            sessionStorage.setItem('userEmail',User.result.email)
            localStorage.setItem('profile',JSON.stringify({ ...actions?.data}))
            return { ...state,data: actions?.data}
        default :
            return state;
    }
}

export default authReducer