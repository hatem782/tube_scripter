import keys from "./user.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { InitialState } from "./user.reducer";

const ActionLogin = (user, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/api/auth/login`, {
        ...user,
      });
      localStorage.setItem("tube_script_token", response?.data?.token);
      dispatch({
        type: keys.all,
        value: {
          payload: false,
          is_connected: true,
          user: response.data.data,
        },
      });
      callback();
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

const ActionRegister = (user, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/api/auth/register`, {
        ...user,
      });
      toast.success("user created successfully");
      dispatch({
        type: keys.payload,
        value: false,
      });
      callback();
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

const GetUserByToken = (callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/api/user/getUser`);
      console.log(response.data);
      callback();
      dispatch({
        type: keys.all,
        value: {
          payload: false,
          is_connected: true,
          user: response.data,
        },
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
      callback();
      console.log(error?.response);
      toast.error(error?.response?.data?.message);
    }
  };
};

const Disconnect = () => {
  return (dispatch) => {
    localStorage.removeItem("tube_script_token");
    dispatch({
      type: keys.all,
      value: {
        ...InitialState,
      },
    });
  };
};

export { ActionLogin, ActionRegister, GetUserByToken, Disconnect };
