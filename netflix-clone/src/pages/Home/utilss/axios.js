

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/", 
  params: {
    api_key: "e618a3dbfa981f67cf3097be8992e318", 
  },
});

export default instance;
