import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const sendContact = async (data) => {
  console.log(data, "YES");
  try {
    const res = await axios.post("/api/contact", data);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
