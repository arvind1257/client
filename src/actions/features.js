import * as api from "../api"

export const Add = (featureData,navigate,displayData) => async (dispatch) => {
    try{
        const { data } = await api.Add(featureData)
        dispatch({type:"FEATURES_DATA",data})
        dispatch(Display(displayData))
        navigate('/home',{state:{display:"false",close:"Adding"}});
    }
    catch(err)
    {
        console.log(err)
    }
}

export const Display = (displayData) => async (dispatch) => {
    try{
        const { data } = await api.Display(displayData)
        dispatch({type:"DISPLAY_DATA",payload: data})
    }
    catch(err){
        console.log(err)
    }
}

export const Modify = (featureData,navigate,displayData) => async (dispatch) => {
    try{
        const { data } = await api.Modify(featureData)
        dispatch({type:"FEATURES_DATA",data})
        dispatch(Display(displayData))
        navigate('/home',{state:{display:"false",close:"Adding"}});
    }
    catch(err)
    {
        console.log(err)
    }
}

export const Delete = (featureData,navigate,displayData) => async (dispatch) => {
    try{
        const { data } = await api.Delete(featureData)
        dispatch({type:"FEATURES_DATA",data})
        dispatch(Display(displayData))
        navigate('/home',{state:null});
    }
    catch(err)
    {
        console.log(err)
    }
}

export const Setting = (settingData,navigate,displayData) => async (dispatch) => {
    try{
        const { data } = await api.Setting(settingData)
        dispatch({type:"FEATURES_SETTING_DATA",data})
        dispatch(Display(displayData))
        navigate('/home',{state:{display1:"false",close:"settings"}});
    }
    catch(err)
    {
        console.log(err)
    }
}
