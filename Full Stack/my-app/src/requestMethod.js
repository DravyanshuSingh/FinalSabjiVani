import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
//const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWYxN2Y5YmFlNzY0YWY3ZGE5MTk0MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzk0OTE4MCwiZXhwIjoxNjk0NzI2NzgwfQ.qMu-A9i6MPm-gbrTluloQLI9r9zD0Dq0jTZ042_ExXo";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
