import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  saveFavouriteBook: function (postData) {
    return axios.post("/api/books", postData);
  },
  getBooks: function (query) {
    return axios.get(BASEURL + query);
  },
  getFavouriteBooks: function () {
    return axios.get("api/books");
  },
  getFavouriteBook: function (id) {
    return axios.get("/api/books/" + id);
  },
};