import $ from "jquery";
import api from './api';
import shoppingList from "./shopping-list";
import store from "./store";
import item from "./item";

import "./index.css";


const main = function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
};
$(main);
