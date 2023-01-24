import { Axios } from "../helpers/axios.config";

export const listCiudadanos = () => {
  return Axios.get("contactos");
};
