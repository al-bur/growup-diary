import { callbackRender } from './callback.js';

// 비동기 이후 insertCards 실행
const POST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=12';

callbackRender(POST_URL);
