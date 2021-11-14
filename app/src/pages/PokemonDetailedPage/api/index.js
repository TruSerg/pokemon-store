import api from "../../../http";

export const getPokemonDetail = (id) => api.get(`products/${id}`);
