const asyncWithPromise = (url) => {
  const response = fetch(url);

  return response.then((res) => {
    if (!res.ok) throw new Error('에러');

    return res.json();
  });
};

export { asyncWithPromise };
