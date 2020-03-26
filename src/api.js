export default {
  getItems,
};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/logankevin';

function getItems() {
  return fetch(`${BASE_URL}/items`);

}