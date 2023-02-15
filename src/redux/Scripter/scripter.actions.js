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
      let title = response1.data.data[0].text.split("\n")[0]?.replace("- ", "");
      dispatch({
        type: keys.youtubetitle,
        value: title,
      });

      // TO WRITE DISCRIPTION
      const response2 = await axios.post(
        `/api/writeSonicApi/youtubedescriptions`,
        {
          ...data,
          video_title: title,
        }
      );
      dispatch({
        type: keys.youtubedescription,
        value: response2.data.data[0].text.split("\n")[0]?.replace("- ", ""),
      });

      let tpye = data.duration.split("-")[0];
      let timeline = Number(data.duration.split("-")[1]) || 1;
      console.log(tpye, timeline);

      //TO WRITE CONTENT
      if (tpye === "a") {
        //type article
        const response3 = await axios.post(
          `/api/writeSonicApi/articlewriterdescription`,
          {
            ...data,
            video_title: title,
            timeline,
          }
        );
        console.log(response3);
        dispatch({
          type: keys.content_scripter,
          value: response3.data.data.data[0].content,
        });
      } else {
        //type parag
        const response3 = await axios.post(
          `/api/writeSonicApi/paragraphwriter`,
          {
            ...data,
            video_title: title,
            timeline,
          }
        );
        console.log(response3);
        dispatch({
          type: keys.content_scripter,
          value: response3.data,
        });
      }

      if (isFree(user) || isStandar(user)) {
        dispatch({
          type: keys.payload,
          value: false,
        });
      }

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

const GetAllScriptsTikTok = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });

      // TO WRITE TITLE
      const response1 = await axios.post(`/api/writeSonicApi/youtubetitles`, {
        ...data,
        video_description: data.description,
        search_term: data.description,
      });
      let title = response1.data.data[0].text.split("\n")[0]?.replace("- ", "");
      dispatch({
        type: keys.tiktoktitle,
        value: title,
      });
      console.log(response1); // cv
      // TO WRITE Description
      const response2 = await axios.post(
        `/api/writeSonicApi/tiktokscriptdescription`,
        {
          ...data,
        }
      );
      console.log(response2); // cv
      let descs = response2.data;
      dispatch({
        type: keys.tiktokscriptdescription,
        value: descs,
      });

      // TO WRITE INTRO
      const response3 = await axios.post(`/api/writeSonicApi/youtubeintros`, {
        ...data,
        video_title: title,
        search_term: title,
      });
      console.log(response3);
      dispatch({
        type: keys.tiktokintro,
        value: response3.data.data[0].text.split("\n")[0]?.replace("- ", ""),
      });

      // TO WRITE HOOK
      const response4 = await axios.post(`/api/writeSonicApi/youtubehooks`, {
        ...data,
        video_title: title,
        search_term: title,
      });
      console.log(response4);
      dispatch({
        type: keys.tiktokhooks,
        value: response4.data.data[0].text.replace(/##/g,`\n`) ,
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

const YoutubeChat = (data, user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });

      const response = await axios.post(`/api/writeSonicApi/chatsonic`, {
        ...data,
      });
      dispatch({
        type: keys.youtube_gpt,
        value: response.data.data.message,
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

export { GetAllScriptsYT, GetAllScriptsTikTok, YoutubeChat };
