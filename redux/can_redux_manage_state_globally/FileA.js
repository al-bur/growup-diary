import FileB from './FileB.js';
import { store } from './redux.js';

export default class FileA {
  constructor() {
    console.log('FileA start');
    store.dispatch({ type: 'counter/incremented' });
    console.log('incremented');
  }

  createFileB() {
    new FileB();
  }
}
