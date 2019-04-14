import axios from 'axios';

export const urlBase =
  'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

export const getDragons = () => axios.get(urlBase);

export const getDetailsDragon = id => axios.get(`${urlBase}/${id}`);

export const createDragon = ({ name, type, createdAt }) =>
  axios.post(urlBase, {
    name,
    type,
    createdAt,
  });

export const deleteDragon = id => axios.delete(`${urlBase}/${id}`);

export const editDragon = (id, { name, type, createdAt }) =>
  axios.put(`${urlBase}/${id}`, {
    name,
    type,
    createdAt,
  });
