// import {
// REGISTER_SUCCESS,  LOGIN_SUCCESS, LOGOUT_SUCCESS, 
// } from './actionTypes';

// let initialstate = {
//   isloading: false,
//   iserror: false,
//   users: [],
//   isAuth: false,
//   token: null,
//   users:[],
// }


// const reducer = (state = initialstate, action) => {
//   switch (action.type) {
 

//     case REGISTER_SUCCESS:
//       return { ...state, isloading: false, iserror: false, users: [action.payload] }

//     case LOGIN_SUCCESS:
//       return { ...state, isloading: false, iserror: false, isAuth: true, token: action.payload }



// case LOGOUT_SUCCESS:
//   return { ...state, isloading: false, iserror: false, isAuth: false,token:null }




//     default:
//       return state;
//   }
// };

// export { reducer };




import React from 'react'
import {
  GET_KIDS_DATA_FAILURE, GET_KIDS_DATA_REQUEST, GET_KIDS_DATA_SUCCESS,
  GET_KIDS_FAILURE, GET_KIDS_REQUEST, GET_KIDS_SUCCESS, DELETE_KIDS_DATA_REQUEST, DELETE_KIDS_DATA_FAILURE, DELETE_KIDS_DATA_SUCCESS, REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS
} from './actionTypes';

let initialstate = {
  isloading: false,
  iserror: false,
  destination: [],
  mybooking: [],
  users: [],
  isAuth: false,
  token: null
}


const reducer = (state = initialstate, action) => {
  switch (action.type) {
    // Coffee Data Cases
    case GET_KIDS_REQUEST:
      return { ...state, isloading: true };
    case GET_KIDS_SUCCESS:
      return { ...state, isloading: false, destination: action.payload };
    case GET_KIDS_FAILURE:
      return { ...state, isloading: false, iserror: true };


    /////satmrngpraveenchanges
    case GET_KIDS_DATA_REQUEST || REGISTER_REQUEST || LOGIN_REQUEST:
      return { ...state, isloading: true }

    case GET_KIDS_DATA_SUCCESS:
      return { ...state, isloading: false, mybooking: action.payload }

    case GET_KIDS_DATA_FAILURE || REGISTER_FAILURE || LOGIN_FAILURE:
      return { ...state, isloading: false, iserror: true }

    case REGISTER_SUCCESS:
      return { ...state, isloading: false, iserror: false, users: [action.payload] }

    case LOGIN_SUCCESS:
      return { ...state, isloading: false, iserror: false, isAuth: true, token: action.payload }


    case DELETE_KIDS_DATA_REQUEST:
      return { ...state, isloading: true }

    case DELETE_KIDS_DATA_SUCCESS:
      const updatedbooking = state.mybooking.filter((booking) => booking.id != action.payload)
      return { ...state, isloading: false, mybooking: updatedbooking, iserror: false }

    case DELETE_KIDS_DATA_FAILURE:
      return { ...state, isloading: false, iserror: true }


case LOGOUT_SUCCESS:
  return { ...state, isloading: false, iserror: false, isAuth: false,token:null }




    default:
      return state;
  }
};

export { reducer };