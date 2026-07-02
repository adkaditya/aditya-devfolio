import api from "./api";

export const getHero = async () => {
  const response = await api.get("/hero");
  return response.data.data;
};

export const createHero = async (data) => {
  const response = await api.post("/hero", data);
  return response.data;
};

export const updateHero = async (id, data) => {
  const response = await api.put(`/hero/${id}`, data);
  return response.data;
};

export const deleteHero = async (id) => {
  const response = await api.delete(`/hero/${id}`);
  return response.data;
};