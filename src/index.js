import updateImageDisplay from './updateImageDisplay';
import './index.css';
import './app.css';

// check environment
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.log('Looks like we are in development mode!');
}

const input = document.querySelector('input');
input.style.opacity = 0;
input.addEventListener('change', updateImageDisplay);
