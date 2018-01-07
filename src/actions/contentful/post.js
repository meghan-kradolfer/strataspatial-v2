import axios from "axios";
import { FETCH_SINGLE_POST, API_BASE_URL, API_SPACE_ID, API_TOKEN } from "../constants";

export function fetchPost(id) {
  const request = id ? axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}&include=1`) : '';
  return {
    type: FETCH_SINGLE_POST,
    payload: request
  };
}
