import keys from "./lang.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { InitialState } from "./lang.reducer";

const GetLangByToken = (callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/api/language/language`);
      dispatch({
        type: keys.all,
        value: {
          payload: false,
          lang: response?.data?.language,
        },
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

const ChangeLang = (lang) => {
  return (dispatch) => {
    dispatch({
      type: keys.update_lang,
      value: lang,
    });
  };
};

export { GetLangByToken,ChangeLang };
