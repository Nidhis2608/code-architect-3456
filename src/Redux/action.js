import axios from "axios";
import { LOGIN_SUCCESS, GET_DESTINATION_FAILURE, GET_DESTINATION_REQUEST, GET_DESTINATION_SUCCESS,GET_BOOKINGS_DATA_REQUEST,GET_BOOKINGS_DATA_SUCCESS,
GET_BOOKINGS_DATA_FAILURE,DELETE_BOOKINGS_DATA_FAILURE,DELETE_BOOKINGS_DATA_SUCCESS,DELETE_BOOKINGS_DATA_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../Redux/actionTypes";


export const registerUser=(formData)=>(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    axios.post('https://mockserver-3.onrender.com/users',formData)
    .then((res)=>{
      console.log(res.data)
      dispatch({type:REGISTER_SUCCESS,payload:res.data})
    })
    .catch(error=>{
  
      console.log(error)
      dispatch({type:REGISTER_FAILURE,})
    })
  }


  export const loginUser=(formData)=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
  
   
    dispatch({type:LOGIN_REQUEST})
    axios.get('https://moke-api-server.onrender.com/Users')
    .then((res)=>{
      console.log(res.data)
    let allow=res.data.find((el)=>
  el.email==formData.email && el.password==formData.password 
    )
  console.log(allow)
  let token=Math.random();
  if(allow){
    resolve (true)
    dispatch({type:LOGIN_SUCCESS,payload:token})
  }
  else{
    alert("Invalid Credentials,Please Check the credentials")
  }
      // dispatch({type:LOGIN_SUCCESS,payload:res.data})
    })
    .catch(error=>{
      resolve (false)
  
      console.log(error)
      dispatch({type:LOGIN_FAILURE,})
    })
  })
  }
  


export const userLogout=(dispatch)=>{
    dispatch({type:LOGOUT_SUCCESS})
  }