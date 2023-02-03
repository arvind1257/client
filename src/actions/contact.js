import * as api from "../api"

export const PostFeedback = (queryData,navigator) => async(dispatch) => {
    try{
        console.log(queryData)
        const { data } = await api.postFeedback(queryData)
        dispatch({type:"POST_FEEDBACK_MESSAGE",payload:data});
        dispatch(DisplayPost())
        navigator("/contact",{state:{display:false}});
    }
    catch(err){
        console.log(err)
    }
}

export const DisplayPost = () => async(dispatch) => {
    try{
        const { data } = await api.displayPost();
        dispatch({type:"DISPLAY_POST_MESSAGE",payload:data})   
    }
    catch(err){

    }
}