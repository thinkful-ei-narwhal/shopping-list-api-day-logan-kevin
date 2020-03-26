import $ from "jquery";

import shoppingList from "./shopping-list";
import store from "./store";
import item from "./item";

import "./index.css";

import api from './api';

const main = function() {
  api.getItems()
    .then(res => console.log(res));

  console.log(api.BASE_URL);

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
