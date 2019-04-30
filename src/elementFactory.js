import getFileSize from './getFileSize';

function createMeta(listItem, file, type) {
  const para = document.createElement('p');
  para.textContent = `File name ${file.name}, file size ${getFileSize(
    file.size,
  )} and file type is ${type}.`;
  listItem.appendChild(para);
  listItem.appendChild(document.createElement('hr'));
}

function createElement(type, file) {
  const preview = document.querySelector('.preview');
  const list = document.createElement('ol');
  preview.appendChild(list);
  const listItem = document.createElement('li');

  const fileType = type || '';

  // console.log('type :', type);

  if (fileType.includes('image')) {
    const image = document.createElement('img');
    image.src = window.URL.createObjectURL(file);
    listItem.appendChild(image);
    createMeta(listItem, file, fileType);
  }
  if (fileType.includes('pdf')) {
    const pdf = document.createElement('embed');
    pdf.src = window.URL.createObjectURL(file);
    listItem.appendChild(pdf);
    createMeta(listItem, file, fileType);
  }

  list.appendChild(listItem);
}
export default createElement;
