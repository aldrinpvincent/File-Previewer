import fileType from 'file-type';
import getFileSize from './getFileSize';
import createElement from './elementFactory';

function getFileDetails(file) {
  const blob = file.slice(0, fileType.minimumBytes);
  const fileReader = new FileReader();
  fileReader.onloadend = function(evt) {
    if (evt.target.readyState === FileReader.DONE) {
      const type = fileType(new Uint8Array(evt.target.result));
      console.log('type :', type);

      let result = type ? type.mime : file.type;
      createElement(result, file);
    }
  };
  fileReader.readAsArrayBuffer(blob);
}

export default getFileDetails;
