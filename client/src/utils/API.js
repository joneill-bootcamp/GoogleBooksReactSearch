import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }


  deleteFavouriteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
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