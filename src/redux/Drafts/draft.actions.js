import keys from "./draft.keys";
import scripter_keys from "../Scripter/scripter.keys";
import { toast } from "react-hot-toast";
import axios from "../../custom/axios";

const CreateDraft = (form) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });

      const { draft_title } = form;
      const { youtubetitle, youtubedescription, content_scripter } =
        getState().ScriptReducer;
      console.log(youtubetitle, youtubedescription, content_scripter);

      const response = await axios.post(`/api/draft/createDraft`, {
        draft: {
          title: youtubetitle,
          description: youtubedescription,
          content: content_scripter,
        },
        draft_title,
      });
      console.log(response);

      toast.success("draft created successfully");

      dispatch({
        type: keys.payload,
        value: false,
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
      console.log(error?.response);
      toast.error(error?.response?.data?.message);
    }
  };
};

const GetAllDrafts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });

      const response = await axios.get(`/api/draft/getmydrafts`);
      console.log(response);

      dispatch({
        type: keys.get_drafts,
        value: response.data,
      });

      dispatch({
        type: keys.payload,
        value: false,
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
      console.log(error?.response);
      toast.error(error?.response?.data?.message);
    }
  };
};

const GetOneDraft = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });

      const response = await axios.get(`/api/draft/getonedraft/${id}`);
      console.log(response);

      dispatch({
        type: keys.update_draft,
        value: response.data,
      });
      const draft = response?.data?.draft;

      dispatch({
        type: scripter_keys.youtubetitle,
        value: draft.title,
      });

      dispatch({
        type: scripter_keys.youtubedescription,
        value: draft.description,
      });

      dispatch({
        type: scripter_keys.content_scripter,
        value: draft.content,
      });

      dispatch({
        type: keys.payload,
        value: false,
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
      console.log(error?.response);
      toast.error(error?.response?.data?.message);
    }
  };
};

const UpdateDraft = (draft) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });

      const { youtubetitle, youtubedescription, content_scripter } =
        getState().ScriptReducer;

      const response = await axios.put(`/api/draft/updateDraft`, {
        draft: {
          title: youtubetitle,
          description: youtubedescription,
          content: content_scripter,
        },
        _id: draft._id,
      });
      console.log(response);

      toast.success("draft updated successfully");

      dispatch({
        type: keys.payload,
        value: false,
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
      console.log(error?.response);
      toast.error(error?.response?.data?.message);
    }
  };
};

export { CreateDraft, GetAllDrafts, GetOneDraft, UpdateDraft };
