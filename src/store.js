const items = [];
const hideCheckedItems = false;

function findById(id) {
  return this.items.find(item => item.id === id);
}

function addItem(item) {
  this.items.push(item);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

function findAndUpdate(id, newData) {
  let oldData = this.findById(id);
  Object.assign(oldData, newData);
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  toggleCheckedFilter,
  findAndUpdate,
};
