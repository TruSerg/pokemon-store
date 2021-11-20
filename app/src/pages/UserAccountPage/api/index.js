import api from "../../../http";

export const getUserOrder = () => api.get("/order");
export const addUserOrder = (orderInfo) => api.post("/order", orderInfo);
