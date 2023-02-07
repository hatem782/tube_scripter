import keys from "./lang.keys";

export const InitialState = {
  payload: false,
  lang: "fr",
};

export const LangReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.update_lang:
      return { ...state, lang: action.value };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
