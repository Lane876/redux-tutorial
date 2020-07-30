const {
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAIL,
} = require("./cakeTypes");

const initialState = {
    loading: false,
    usernames: [],
    error: ''
  }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return {
          loading: true
        }
      case FETCH_USER_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case FETCH_USER_FAIL:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default userReducer