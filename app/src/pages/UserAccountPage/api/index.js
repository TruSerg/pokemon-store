import api from "../../../http";

export const getUserOrder = (body) => api.get("/order", body);
export const addUserOrder = (body) => api.post("/order", body);
