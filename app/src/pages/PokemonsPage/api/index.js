import api from "../../../http";

export const getPokemons = () => api.get("products");
