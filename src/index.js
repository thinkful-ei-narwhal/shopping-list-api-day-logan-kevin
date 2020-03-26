import $ from "jquery";
import api from './api';
import shoppingList from "./shopping-list";
import store from "./store";
import item from "./item";

import "./index.css";



const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
  api.createItem('pears')
    .then(res => res.json())
    .then((newItem) => {
      store.addItem(newItem);

    })
    .then(res => res.json())
    .then((items) => {
      console.log(items);
    });


  shoppingList.bindEventListeners();
  shoppingList.render();
};
$(main);
