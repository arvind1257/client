import * as api from "../api"


export const signUp = (authData,navigate) => async (dispatch) => {
    try{
        const { data } = await api.signUp(authData)
        console.log(data)
        data.message ?  dispatch({type:"AUTH_ERROR",payload:data}) : dispatch({type:"Auth",data})
        data.message ?  navigate('/signup') : navigate('/')
    }
    catch(err)
    {
        console.log(err)
    }
}

export const logIn = (authData,navigate) => async (dispatch) => {
    try{
        const { data } = await api.logIn(authData)
        dispatch({type:"Auth",data})
        navigate('/home',{state:null});
    }
    catch(err)
    {
        console.log(err)
    }
}

export const newUser = (authData,navigate) => async (dispatch) => {
    try{
        const { data } = await api.newUser(authData)
        dispatch({type:"Auth",data})
        navigate('/home',{state:null});
    }
    catch(err)
    {
        console.log(err)
    }
}