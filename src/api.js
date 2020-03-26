export default {
  getItems,
  createItem,
};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/logankevin';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
  let newItem = {};
  newItem.name = name;
  return fetch(`${BASE_URL}/items`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });
}

