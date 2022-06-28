import axios from "axios";

const KEY = "AIzaSyDaT3fLqrdtmfms2E-qAmINnH2m_HGtM1I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
