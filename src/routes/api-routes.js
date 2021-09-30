import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const API = {
  searchMovieByTitle: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`
        );
        resolve(request.data.Search);
      } catch (err) {
        reject(err);
      }
    });
  },
    searchAPI: inputValue => {
      return new Promise(async (resolve, reject) => {
        try {
          const request = await axios.get(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`
            );
            resolve(request.data);
          } catch (err) {
            reject(err);
          }
        });
      }
};
