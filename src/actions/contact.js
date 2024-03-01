import * as api from "../api"

export const PostMessage = (queryData,navigator) => async(dispatch) => {
    try{
        const { data } = await api.postMessage(queryData)
        dispatch({type:"Auth",data})
        navigator("/contact",{state:{display:false}});
    }
    catch(err){
        console.log(err)
    }
}

export const DeleteMessage = (queryData,navigator) => async(dispatch) => {
    try{
        const { data } = await api.deleteMessage(queryData)
        dispatch({type:"Auth",data})
        navigator("/contact",{state:{display:false}});
    }
    catch(err){
        console.log(err)
    }
}