import axios from "axios";

export const getUsersChats = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  return data;
};

export const getUsersPics = async () => {
  const { data } = await axios.get("https://reqres.in/api/users");
  return data;
};
