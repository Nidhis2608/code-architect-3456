import axios from "axios";
import { LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS } from "./actionTypes";


export const registerUser=(formData)=>(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    axios.post('https://moke-api-server.onrender.com/Users',formData)
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
    axios.get('https://moke-api-server.onrender.com/users')
    .then((res)=>{
      console.log(res.data)
    let allow=res.data.find((el)=>
  el.email===formData.email && el.password===formData.password 
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