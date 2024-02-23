import {
REGISTER_SUCCESS,  LOGIN_SUCCESS, LOGOUT_SUCCESS
} from '../Redux/actionTypes';

let initialstate = {
  isloading: false,
  iserror: false,
  isAuth: false,
  token: null
}


const reducer = (state = initialstate, action) => {
  switch (action.type) {
 

    case REGISTER_SUCCESS:
      return { ...state, isloading: false, iserror: false, users: [action.payload] }

    case LOGIN_SUCCESS:
      return { ...state, isloading: false, iserror: false, isAuth: true, token: action.payload }



case LOGOUT_SUCCESS:
  return { ...state, isloading: false, iserror: false, isAuth: false,token:null }




    default:
      return state;
  }
};

export { reducer };