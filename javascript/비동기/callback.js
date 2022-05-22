const asyncWithCallback = (url, callbackFunc) => {
  const request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === this.DONE) {
      const result = JSON.parse(request.responseText);

      callbackFunc(result);
    }
  };

  request.open('GET', url);
  request.send();
};

const callbackRender = (url) =>
  asyncWithCallback(url, function (poketmons) {
    const { results } = poketmons;
    const cardGroup = document.querySelector('.card-group');

    const insertPoketmon = (image) => {
      cardGroup.insertAdjacentHTML('beforeend', cardTemplate(image));
    };

    const cardTemplate = (src) => `
      <img src="${src}" />
    `;

    // front_default 이미지를 다 받고 난 이후에 render를 해주려고 하는데, 방법이 생각나지 않는다.
    results.forEach(({ url }) => {
      asyncWithCallback(url, function (result) {
        const {
          sprites: {
            other: {
              dream_world: { front_default },
            },
          },
        } = result;

        insertPoketmon(front_default);
      });
    });
  });

export { callbackRender };
