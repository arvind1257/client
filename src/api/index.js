import axios from "axios"
const API = axios.create({baseURL:'http://localhost:5000'})
export const logIn = (authData) => API.post('/user/login',authData);
export const signUp = (authData) => API.post('/user/signup',authData);
export const newUser = (authData) => API.post('/user/usertype',authData);
export const Setting = (settingData) =>API.post('/feature/setting',settingData);
export const Add = (featureData) =>API.post('/feature/add',featureData);
export const Display = (displayData) => API.post('/feature/display',displayData);
export const Modify = (featureData) =>API.post('/feature/modify',featureData);
export const Delete = (featureData) =>API.post('/feature/delete',featureData);