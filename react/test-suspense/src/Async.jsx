import { useState } from 'react';
import { useEffect } from 'react';

const getItem = () => {
  return {
    name: 'sam',
    age: '20',
  };
};

// const getPredictedAge = async (name) => {
//   const response = await fetch(`https://api.agify.io?name=${name}`);

//   return response.json();
// };

function Async() {
  // const [temp, setTemp] = useState('');

  const temp = getItem();

  //   useEffect(() => {
  //   getPredictedAge('same').then((res) => {
  //     setTemp(res);
  //   });
  // }, []);

  return (
    <div>
      {temp.name}
      {temp.age}
    </div>
  );
}

export default Async;
