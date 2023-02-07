import keys from "./scripter.keys";

export const InitialState = {
  payload: false,
  youtubetitles: [],
  paragraphwriter: [],
  youtubeintros: [],
  youtubehooks: [],
  youtubedescriptions: [],
  tiktokscriptdescription: [],
};

export const ScriptReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.update_script:
      return { ...state, update_script: action.value };
    case keys.youtubetitles:
      return { ...state, youtubetitles: action.value };
    case keys.paragraphwriter:
      return { ...state, paragraphwriter: action.value };
    case keys.youtubeintros:
      return { ...state, youtubeintros: action.value };
    case keys.youtubehooks:
      return { ...state, youtubehooks: action.value };
    case keys.youtubedescriptions:
      return { ...state, youtubedescriptions: action.value };
      case keys.tiktokscriptdescription:
        return { ...state, tiktokscriptdescription: action.value };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
