import { Axios } from "../helpers/axios.config";

export const listCiudadanos = () => {
  return Axios.get("contactos");
};

export const createCiudadano = (data) => {
  return Axios.post("contactos/crear", data);
};
