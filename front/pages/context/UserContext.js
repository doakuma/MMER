import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  userList: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        userList: state.userList.concat(action.user),
      };
    case "SIGNIN":
      return {
        ...state,
        user: {
          userId: action.userId,
          userName: action.userName,
          userMail: action.userMail,
        },
      };
    case "SIGNOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("userProvider", state);
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
