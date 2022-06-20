import { useState } from 'react';

function Fetcher() {
  const [error, setError] = useState(false);

  if (error) throw Error;

  const handleFetch = async () => {
    try {
      throw Error('error is happening');
    } catch (err) {
      setError(true);
    }
  };

  return <button onClick={handleFetch}>클릭하면 정보를 가져옵니다.</button>;
}

export default Fetcher;
