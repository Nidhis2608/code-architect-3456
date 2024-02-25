import {
REGISTER_SUCCESS,  LOGIN_SUCCESS, LOGOUT_SUCCESS, ADD_TO_CART,
} from './actionTypes';

let initialstate = {
  isloading: false,
  iserror: false,
  isAuth: false,
  token: null,
  users:[],
}


const reducer = (state = initialstate, action) => {
  switch (action.type) {
 
case ADD_TO_CART:
  return {
    ...state,
    cart: [...state.cart, action.payload],
  };


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
