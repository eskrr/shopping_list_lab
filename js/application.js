function deleteItem(event) {
  event.target.parentElement.parentElement.remove();
}

function checkItem(event) {
  item = event.target.parentElement.parentElement;
  text = item.querySelector('.item-name').innerText;
  item.querySelector('.item-name').innerHTML = '<del>' + text + '</del>';

  event.target.innerText = 'uncheck';

  event.target.removeEventListener('click', checkItem);
  event.target.addEventListener('click', unCheckItem);
}

function unCheckItem(event) {
  item = event.target.parentElement.parentElement;
  text = item.querySelector('.item-name').innerText;
  item.querySelector('.item-name').innerHTML = text;

  event.target.innerText = 'check';

  event.target.removeEventListener('click', unCheckItem);
  event.target.addEventListener('click', checkItem);
}

function addItem(event) {
  item_name = document.getElementById('item_name_field').value;
  item_template = document.getElementById('item_template').content.cloneNode(true);
  item_template.querySelector('.item-name').innerText = item_name;

  items = document.getElementById('items');
  items.appendChild(item_template);

  new_item = items.children[items.children.length - 1];
  new_item.getElementsByClassName('delete')[0].addEventListener('click', deleteItem);
  new_item.getElementsByClassName('check')[0].addEventListener('click', checkItem);
}

window.addEventListener('load', function(event) {
  document.getElementById('add').addEventListener('click', addItem);
});