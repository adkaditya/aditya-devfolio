import api from "./api";

export const getAbout = async () => {
  const response = await api.get("/about");
  return response.data.data;
};

export const createAbout = async (data) => {
  const response = await api.post("/about", data);
  return response.data;
};

export const updateAbout = async (id, data) => {
  const response = await api.put(`/about/${id}`, data);
  return response.data;
};

export const deleteAbout = async (id) => {
  const response = await api.delete(`/about/${id}`);
  return response.data;
};