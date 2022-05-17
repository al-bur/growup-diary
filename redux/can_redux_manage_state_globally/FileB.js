import { store } from './redux.js';

export default class FileB {
  constructor() {
    console.log('FileB started');
    console.log(store.getState());
  }
}
