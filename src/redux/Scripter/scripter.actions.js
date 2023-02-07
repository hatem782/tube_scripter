import keys from "./scripter.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";

import { isFree, isPremium, isStandar } from "../../custom/user.access";

const GetAllScriptsYT = (data, user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });

      // TO WRITE TITLE
      const response1 = await axios.post(`/api/writeSonicApi/youtubetitles`, {
        ...data,
      });
      let titles = response1.data.data[0].text.split("\n");
      dispatch({
        type: keys.youtubetitles,
        value: titles,
      });

      //TO WRITE CONTENT
      //requires : video_title,tone_of_voice,language,num_copies
      const response2 = await axios.post(`/api/writeSonicApi/paragraphwriter`, {
        ...data,
        video_title: titles[0],
      });
      console.log(response2);
      dispatch({
        type: keys.paragraphwriter,
        value: response2.data.data[0].text.split("\n"),
      });

      if (isFree(user) || isStandar(user)) {
        dispatch({
          type: keys.payload,
          value: false,
        });
      }

      if (isPremium(user)) {
        // TO WRITE INTRO
        const response3 = await axios.post(`/api/writeSonicApi/youtubeintros`, {
          ...data,
          video_title: titles[0],
        });
        dispatch({
          type: keys.youtubeintros,
          value: response3.data.data[0].text.split("\n"),
        });

        // TO WRITE HOOK
        const response4 = await axios.post(`/api/writeSonicApi/youtubehooks`, {
          ...data,
          video_title: titles[0],
        });
        dispatch({
          type: keys.youtubehooks,
          value: response4.data.data[0].text.split("\n"),
        });

        // TO WRITE DISCRIPTION
        const response5 = await axios.post(
          `/api/writeSonicApi/youtubedescriptions`,
          {
            ...data,
            video_title: titles[0],
          }
        );
        dispatch({
          type: keys.youtubedescriptions,
          value: response5.data.data[0].text.split("\n"),
        });
        dispatch({
          type: keys.payload,
          value: false,
        });
      }
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

const GetAllScriptsTikTok = (data, user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });

      // TO WRITE TITLE
      const response1 = await axios.post(
        `/api/writeSonicApi/tiktokscriptdescription`,
        {
          ...data,
        }
      );
      let descs = response1.data.data[0].text.split("\n");
      dispatch({
        type: keys.tiktokscriptdescription,
        value: descs,
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

export { GetAllScriptsYT, GetAllScriptsTikTok };
