import { Suspense } from 'react';
import Async from './Async';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Suspense fallback={<ErrorPage />}>
      {/* <h1>this is Main</h1> */}
      <Async />
    </Suspense>
  );
}

export default App;
