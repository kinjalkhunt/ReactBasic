import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "../action/UserAction";

const initialState = {
    loading: false,
    users: [],
    error: null
  };
  
  export const addData = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_REQUEST:
        return {
          ...state,
          loading: true
        };
      case GET_USER_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: null
        };
      case GET_USER_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        };
      default:
        return state;
    }
  };