const API = 'live_nFkDMwGzWHOPFUiy1jlOBa7dzhoEtQ6FHtpkuvMzcNm6ULf6PdHkf7uexzeeGlCn';
const BASE_URL = 'https://api.thecatapi.com/v1/';
const BREEDS = 'breeds';
const IMG_SEARCH = 'images/search';

function fetchBreeds() {
    return fetch(`${BASE_URL}${BREEDS}`).then(response => response.json());
    
  }

  function fetchCatByBreed(breedId) {
    return fetch(
      `${BASE_URL}${IMG_SEARCH}?limit=1&breed_ids=${breedId}&api_key=${API}`
    ).then(data => data.json());
  }

  export { fetchBreeds, fetchCatByBreed };