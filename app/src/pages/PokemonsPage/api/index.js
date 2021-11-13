import api from "../../../http";

export const getPokemons = (page) => api.get(`products?page=${page}`);
