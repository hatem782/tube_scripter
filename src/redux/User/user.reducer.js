import keys from "./user.keys";

export const InitialState = {
  payload: false,
  is_connected: false,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    numTel: "",
    language: "",
    picture: "",
    recovery_token: "",
    plan: "free",
    subscribe_id: "",
    nbr_words: 0,
  },
};

export const UserReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.update_user:
      return { ...state, user: action.value };
    case keys.payload:
      return { ...state, payload: action.value };
    case keys.connect:
      return { ...state, connect: action.value };
    default:
      return state;
  }
};
