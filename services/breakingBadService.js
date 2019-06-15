import axios from 'axios';

export const urlBase = 'https://www.breakingbadapi.com/api/';

export const getCharacters = () => axios.get(`${urlBase}characters`);

export const getCharacterDetails = id =>
  axios.get(`${urlBase}characters/${id}`);

export const getEpisodesList = () => axios.get(`${urlBase}episodes`);

export const getEpisodeDetails = id => axios.get(`${urlBase}episodes/${id}`);

export const getQuotes = () => axios.get(`${urlBase}quotes`);
