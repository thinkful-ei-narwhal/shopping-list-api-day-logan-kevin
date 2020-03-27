const BASE_URL = 'https://thinkful-list-api.herokuapp.com/logankevin';
//GLOBAL BAD!!
// function getItems() {
//   return fetch(`${BASE_URL}/items`);
// }

// function createItem(name) {
//   let newItem = {};
//   newItem.name = name;
//   return fetch(`${BASE_URL}/items`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newItem),
//   });
// }
function getItems() {
  let url = `${BASE_URL}/items`;
  return listApiFetch(url);
}

function createItem(name) {
  let newItem = {};
  newItem.name = name;
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  };
  let url = `${BASE_URL}/items`;
  return listApiFetch(url, option);
}

function updateItem(id, updateData) {
  let data = updateData;
  const option = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    //server only reads a string
    body: JSON.stringify(data),
  };
  //send server data to api
  let url = `${BASE_URL}/items/${id}`;
  return listApiFetch(url, option);
  // return fetch(`${BASE_URL}/items/${id}`, option);
}

function listApiFetch(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (res.ok) {
        // Valid HTTP response but non-2xx status - let's create an error!
        error = { code: res.status };
      }

      // In either case, parse the JSON stream:
      return res.json();
    })

    .then(data => {
      // If error was flagged, reject the Promise with the error object
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      // Otherwise give back the data as resolved Promise
      return data;
    });
}

export default {
  getItems,
  createItem,
  updateItem,
  listApiFetch,
};

