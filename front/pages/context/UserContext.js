import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  userList: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  lodaing: true,
  data: null,
  error: null,
};

const success = (data) => ({
  lodaing: false,
  data,
  error: null,
});

const error = (e) => ({
  loading: false,
  data: null,
  error: e,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        userList: lodaingState,
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        userList: success(action.data),
      };
    case "GET_USERS_ERROR":
      return {
        ...state,
        userList: error(action.error),
      };
    case "GET_USER":
      return {
        ...state,
        user: lodaingState,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: success(action.data),
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        user: error(action.error),
      };
    default:
      throw new Error(`Unhandled action type :  ${error}`);
  }
};

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const UseUserState = () => {
  const state = useContext(UserStateContext);
  console.log("state", state);
  if (!state) throw new Error("Cannot find UserProvider");
  return state;
};
export const UseUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error("Cannot find UserProvider");
  return dispatch;
};

export const getUsers = async (dispatch) => {
  const res = await axios.get("/api/user/getUser");
  try {
    dispatch({ type: "GET_USERS_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_USERS_ERROR", error: e });
  }
};

export const getUser = async (dispatch, id) => {
  let params = { id: id };
  const res = await axios.get(`/api/user/getUser/`, { params });
  try {
    dispatch({ type: "GET_USER_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_USER_ERROR", error: e });
  }
};
