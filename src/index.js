import $ from "jquery";
import api from './api';
import shoppingList from "./shopping-list";
import store from "./store";

import "./index.css";


const main = function() {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      const item = store.items[0];
      console.log('current name: ' + item.name);
      store.findAndUpdate(item.id, { name: 'barbaz' });
      console.log('new name: ' + item.name);
      shoppingList.render();
    });

  shoppingList.bindEventListeners();
  shoppingList.render();
};
$(main);
