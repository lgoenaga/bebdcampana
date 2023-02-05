import { Axios } from "../helpers/axios.config";



export const listUsuarios = (_header) => {
 
  return Axios.get("usuarios", _header);
};

export const createUsuario = (data) => {
  return Axios.post("usuarios/crear", data);
};

export const deleteUsuario = (user) => {
  return Axios.delete(`usuarios/${user}`);
};

export const updateUsuario = (userLogin, data) => {
  return Axios.put(`usuarios/${userLogin}`, data);
};

export const getUsuario = (user) => {
  return Axios.get(`usuarios/${user}`);
};
