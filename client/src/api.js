import axios from 'axios';

const baseAPI = '/api';

const api = {
  getLoggedIn() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseAPI}`)
        .then((response) => resolve(response.data))
        .catch((err) => {
          reject(err);
        });
    });
  },
  getUser() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseAPI}/user`)
        .then((response) => resolve(response.data))
        .catch((err) => {
          reject(err);
        });
    });
  },
  getUserWithId(userId) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseAPI}/user/${userId}`)
        .then((response) => resolve(response.data))
        .catch((err) => {
          reject(err);
        });
    });
  },
  postUserUpdate(obj) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseAPI}/updateUser`, obj)
        .then((response) => resolve(response.data))
        .catch((err) => {
          reject(err);
        });
    });
  },
  postTutorPost(obj) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseAPI}/tutorPost`, obj)
        .then((response) => resolve(response.data))
        .catch((err) => {
          reject(err);
        });
    });
  },
  makeAppointment(obj) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseAPI}/makeAppointment`, obj)
        .then((response) => resolve(response.data))
        .catch((err) => {
          reject(err);
        });
    });
  },
  cancelAppointment(obj) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseAPI}/cancelAppointment`, obj)
        .then((response) => resolve(response.data))
        .catch((err) => {
          reject(err);
        });
    });
  },
  getTutorResults(obj) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseAPI}/getTutors`, obj)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

export default api;
