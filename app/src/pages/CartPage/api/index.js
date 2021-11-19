import api from "../../../http";

export const getCart = (body) => api.get("/cart", body);
export const addItemToCart = (body) => api.post("/cart/item", body);
export const changeItem = (body) => api.patch("/cart/item", body);
export const removeItemFromCart = (id) => api.delete(`/cart/item/${id}`);
