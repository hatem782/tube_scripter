import keys from "./scripter.keys";

export const InitialState = {
  payload: false,
  // youtube
  youtubetitle: "",
  youtubedescription: "",
  content_scripter: "",
  // tiktok
  tiktokscriptdescription: "",
  tiktoktitle: "",
  tiktokintro: "",
  tiktokhooks: "",
  // gpt
  youtube_gpt: "",

  // can edit
  can_edit_youtube: false,
  can_edit_tiktok: false,
  can_edit_gpt: false,
};

export const ScriptReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    // youtube
    case keys.update_script:
      return { ...state, update_script: action.value };
    case keys.youtubetitle:
      return { ...state, youtubetitle: action.value };
    case keys.content_scripter:
      return { ...state, content_scripter: action.value };
    case keys.youtubedescription:
      return { ...state, youtubedescription: action.value };
    // tiktok
    case keys.tiktokscriptdescription:
      return { ...state, tiktokscriptdescription: action.value };
    case keys.tiktoktitle:
      return { ...state, tiktoktitle: action.value };
    case keys.tiktokintro:
      return { ...state, tiktokintro: action.value };
    case keys.tiktokhooks:
      return { ...state, tiktokhooks: action.value };
    // gpt
    case keys.youtube_gpt:
      return { ...state, youtube_gpt: action.value };
    // can edit
    case keys.can_edit_youtube:
      return { ...state, can_edit_youtube: action.value };
    case keys.can_edit_tiktok:
      return { ...state, can_edit_tiktok: action.value };
    case keys.can_edit_gpt:
      return { ...state, can_edit_gpt: action.value };

    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
