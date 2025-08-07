import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9a2272da1ed74d5bbbd0d4b90dc808be",
  },
});
