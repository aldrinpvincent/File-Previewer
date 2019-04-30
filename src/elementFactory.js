import getFileSize from './getFileSize';

function createMeta(listItem, file, type) {
  const para = document.createElement('p');
  para.textContent = `File name :  ${file.name}, file size :  ${getFileSize(
    file.size
  )} and file type : ${type}.`;
  listItem.appendChild(para);
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
