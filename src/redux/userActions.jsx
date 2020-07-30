import axios from "axios";
const {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
} = require("./cakeTypes");

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error,
  };
};

// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch(fetchUsersRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         const users = response.data;
//         dispatch(fetchUsersSuccess(users));
//       })
//       .catch((error) => {
//         dispatch(fetchUsersFailure(error.message));
//       });
//   };
// };


export const fetchUsers =  () => {
  return  async dispatch => {
  try {
    dispatch(fetchUsersRequest())
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    const users = response.data
    dispatch(fetchUsersSuccess(users))    
  } catch (error) {
    dispatch(fetchUsersFailure(error))
  }}

}
