import { callbackRender } from './callback.js';
import { asyncWithPromise } from './promise.js';

// 비동기 이후 insertCards 실행
const POST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=12';

const cardGroup = document.querySelector('.card-group');

const insertPoketmon = (image) => {
  cardGroup.insertAdjacentHTML('beforeend', cardTemplate(image));
};

const cardTemplate = (src) => `
      <img src="${src}" />
    `;

const getTotalData = (url) => {
  return asyncWithPromise(url).then((res) => {
    return res.results;
  });
};

const extractImages = (url) => {
  return asyncWithPromise(url).then((res) => {
    const {
      sprites: {
        other: {
          dream_world: { front_default },
        },
      },
    } = res;

    return front_default;
  });
};

getTotalData(POST_URL).then((result) => {
  result.forEach(({ url }) => {
    extractImages(url).then((image) => {
      insertPoketmon(image);
    });
  });
});
