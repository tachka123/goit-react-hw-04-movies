import axios from 'axios';

const API_KEY = 'api_key=37fb2304dd695f53d243740619b61ce9';

export async function getPopular() {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=en-US&page=1`,
  );
  return results;
}

export async function getBySearch(search) {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&${API_KEY}`,
  );
  return results;
}

export async function getById(id) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?${API_KEY}&language=en-US`,
  );
  return data;
}

export async function getReviews(id) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?${API_KEY}&language=en-US&page=1`,
  );
  return data;
}

export async function getCast(id) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?${API_KEY}`,
  );
  return data;
}
