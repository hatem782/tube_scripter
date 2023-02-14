import keys from "./scripter.keys";

export const InitialState = {
  payload: false,
  youtubetitle: "",
  youtubedescription: "",
  content_scripter: "",
  tiktokscriptdescription: "",
  tiktoktitle: "",
  tiktokintro: "",
  tiktokhooks: "",
  youtube_gpt: "",
};

export const ScriptReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.update_script:
      return { ...state, update_script: action.value };
    case keys.youtubetitle:
      return { ...state, youtubetitle: action.value };
    case keys.content_scripter:
      return { ...state, content_scripter: action.value };
    case keys.youtubedescription:
      return { ...state, youtubedescription: action.value };
    case keys.tiktokscriptdescription:
      return { ...state, tiktokscriptdescription: action.value };
    case keys.tiktoktitle:
      return { ...state, tiktoktitle: action.value };
    case keys.tiktokintro:
      return { ...state, tiktokintro: action.value };
    case keys.tiktokhooks:
      return { ...state, tiktokhooks: action.value };
    case keys.youtube_gpt:
      return { ...state, youtube_gpt: action.value };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
