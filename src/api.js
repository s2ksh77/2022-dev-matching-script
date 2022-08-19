export const API_KEY = 'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev';

const cache = {};

export const api = async (url) => {
  if (cache[url]) return cache[url];
  try {
    const res = await fetch(url);
    if (res?.ok) {
      const data = await res?.json();
      cache[url] = data;
      return data;
    } else {
      const errData = await res?.json();
      throw errData;
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

export const fetchUrl = async (searchKey) =>
  api(`${API_KEY}/languages?keyword=${searchKey}`);
