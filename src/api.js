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

// //
// //SOLUTION THAT ISNT HORRIBLY BROKEN
// function createItem(name) {
//   let newItem = {};
//   newItem.name = name;
//   const options = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newItem)
//   };
//   return fetch(`${BASE_URL}/items`, options);
// }


//SOLUTION THAT ISNT HORRIBLY BROKEN
// const createItem = function (name) {
//   console.log(name);
//   const newItem = JSON.stringify({ name: name });
//   console.log(newItem);
//   const options = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: newItem
//   };
//   return fetch(`${BASE_URL}/items`, options);
// };
// const createItem = function (name) {
//   //make object
//   const newItem = JSON.stringify({ name });
//   //set the name of the new object to Parameter name

//   console.log(newItem);

//   return fetch(`${BASE_URL}/items`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       body: newItem
//     },
//   });
// };

function updateItem(id, updateData) {
  let data = updateData;
  const option = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  return fetch(`${BASE_URL}/items/${id}`, option);
}

export default {
  getItems,
  createItem,
  updateItem,
};