import $ from "jquery";
import api from './api';
import shoppingList from "./shopping-list";
import store from "./store";
import item from "./item";

import "./index.css";



const main = function () {
  api.getItems()
    .then(res => res.json())
    .then(res => console.log(res));

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
