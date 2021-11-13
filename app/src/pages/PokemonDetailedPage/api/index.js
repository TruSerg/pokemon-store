import api from "../../../http";

export const getPokemonDetail = (name) => api.get(`products/${name}`);
