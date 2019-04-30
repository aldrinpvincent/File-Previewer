import getFileSize from './getFileSize';

function createElement(type, file) {
  const preview = document.querySelector('.preview');
  var list = document.createElement('ol');
  preview.appendChild(list);
  var listItem = document.createElement('li');

  type = type || '';

  console.log('type :', type);

  if (type.includes('image')) {
    const image = document.createElement('img');
    image.src = window.URL.createObjectURL(file);
    listItem.appendChild(image);
    createMeta(listItem, file, type);
  }
  if (type.includes('pdf')) {
    const pdf = document.createElement('embed');
    pdf.src = window.URL.createObjectURL(file);
    listItem.appendChild(pdf);
    createMeta(listItem, file, type);
  }

  list.appendChild(listItem);
}
export default createElement;

function createMeta(listItem, file, type) {
  var para = document.createElement('p');
  para.textContent = `File name ${file.name}, file size ${getFileSize(
    file.size
  )} and file type is ${type}.`;
  listItem.appendChild(para);
  listItem.appendChild(document.createElement('hr'));
}
