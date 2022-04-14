import axios from "axios";

export const baseUrl = "https://www.omdbapi.com";
export const apiKey = 60839226;

export const useOmdb = () => {
  const defaultHeader = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const customFetch = ({
    endpoint,
    method = "GET",
    headers = defaultHeader,
  }) => {
    const url = `${baseUrl}/?apikey=${apiKey}${endpoint}`;

    const options = {
      method,
      headers,
    };

    return axios(url, options)
      .then((response) => response.data)
      .catch((error) => {
        return error?.response?.data || { status: false };
      });
  };

  const getByName = (name) => {
    
    const url = `&s=${name}`

   
    return customFetch({ endpoint: url });
  };

  
  const getById = ( id) => {
    
    const url = `&i=${id}`

   
    return customFetch({ endpoint: url });
  };
  return {
    getByName,
    getById
  };
};
