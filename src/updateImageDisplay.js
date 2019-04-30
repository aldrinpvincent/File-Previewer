import getFileDetails from './fileDetails';
import createElement from './elementFactory';

const preview = document.querySelector('.preview');
const input = document.querySelector('input');

function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }
  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    for (let i = 0; i < curFiles.length; i += 1) {
      const fileDetails = getFileDetails(curFiles[i]);
    }
  }
}

export default updateImageDisplay;
