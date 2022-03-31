import axios from "axios";

export const baseUrl = "http://127.0.0.1";
export const apiPort = 3001;

export const useAPI = (token) => {
  const defaultHeader = {
    Accept: "application/json",
    "Content-Type": "application/json",
    //Authorization: `Bearer ${token}`,
    //'x-api-token': token,
  };

  const customFetch = ({
    endpoint,
    method = "GET",
    body = {},
    headers = defaultHeader,
    isBinary,
  }) => {
    const url = `${baseUrl}:${apiPort}/${endpoint}`;

    const options = {
      method,
      headers,
    };

    if (Object.keys(body).length) {
      options.data = JSON.stringify(body);
    }
    if (isBinary) {
      options.responseType = "arraybuffer";
    }
    return axios(url, options)
      .then((response) => response.data)
      .catch((error) => {
        return error?.response?.data || { status: false };
      });
  };

  const get = (endpoint, id, query, token) => {
    const url = `${endpoint}${
      id ? `/${id}${query ? `?${query}` : ""}` : `${query ? `?${query}` : ""}`
    }`;

    if (token) {
      defaultHeader.Authorization = `Bearer ${token}`;
    }
    return customFetch({ endpoint: url });
  };

  const post = (endpoint, body = {}) => {
    //if (!Object.keys(body).length)throw new Error('to make a post you must provide a  body');

    return customFetch({ endpoint, method: "POST", body });
  };

  const getBinaryData = (endpoint, id, query, token) => {
    const url = `${endpoint}${
      id ? `/${id}${query ? `?${query}` : ""}` : `${query ? `?${query}` : ""}`
    }`;

    if (token) {
      defaultHeader.Authorization = `Bearer ${token}`;
    }
    return customFetch({ endpoint: url, isBinary: true });
  };

  const put = (endpoint, id, body = {}, token) => {
    if (!id && !body) {
      throw new Error("to make a put you must provide the id and the   body");
    }
    if (token) {
      defaultHeader.Authorization = `Bearer ${token}`;
    }
    const url = `${endpoint}${id ? `/${id}` : ""}`;
    return customFetch({
      endpoint: url,
      method: "PUT",
      body,
      headers: defaultHeader,
    });
  };

  const del = (endpoint, id) => {
    if (!id) {
      throw new Error("to make a delete you must provide the id and the body");
    }
    const url = `${endpoint}/${id}`;

    return customFetch({ endpoint: url, method: "DELETE" });
  };
  return {
    get,
    post,
    put,
    del,
    getBinaryData,
  };
};
