import api from "../../../http";

export const getCart = () => api.get("/cart");
export const addItemToCart = (addItem) => api.post("/cart/item", addItem);
export const changeQuantity = (quantityData) =>
  api.patch("/cart/item", quantityData);
export const removeItemFromCart = (id) => api.delete(`/cart/item/${id}`);
