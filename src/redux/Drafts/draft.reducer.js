import keys from "./draft.keys";

export const InitialState = {
  payload: false,
  drafts: [],
  draft: null,
};

export const DraftReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.update_draft:
      return { ...state, draft: action.value };
    case keys.get_drafts:
      return { ...state, drafts: action.value };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
