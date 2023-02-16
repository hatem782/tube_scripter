import axios from "../custom/axios";

export const CreateContact = (data, succ, fail) => {
  axios
    .post("/api/contact/createContact", { ...data })
    .then((resp) => {
      console.log(resp);
      succ(resp);
    })
    .catch((error) => {
      fail(error);
    });
};
