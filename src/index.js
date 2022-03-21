import updateImageDisplay from './updateImageDisplay';

// check environment
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.log('Looks like we are in development mode!');
}

const input = document.querySelector('input');
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  input.value = '';
  updateImageDisplay();
});
input.style.opacity = 0;
input.addEventListener('change', updateImageDisplay);
