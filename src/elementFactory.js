import getFileSize from './getFileSize';

function createMeta(listItem, file, type) {
  const fileDetails = document.createElement('p');
  fileDetails.innerHTML = `File name :  <strong>${file.name}</strong>,  File size :  <strong>${getFileSize(file.size)}</strong> and File type : <strong>${type}<strong/>.`;
  fileDetails.className = 'file-details';
  listItem.appendChild(fileDetails);
  listItem.appendChild(document.createElement('hr'));
}

function createElement(type, file) {
  const preview = document.querySelector('.preview');
  const list = document.createElement('ol');
  preview.appendChild(list);
  const listItem = document.createElement('li');

  // eslint-disable-next-line no-console
  console.log('type :', type);

  const element = document.createElement('object');
  element.data = window.URL.createObjectURL(file);
  element.type = type;
  listItem.appendChild(element);
  createMeta(listItem, file, type);
  list.appendChild(listItem);
}
export default createElement;
