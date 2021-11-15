import axios from "axios";

const KEY = "AIzaSyAog0hWHlpPfy6pY8zpmsKLmYJSFb1A8LI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
  },
});
