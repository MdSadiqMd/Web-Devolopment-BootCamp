import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const About = lazy(() => import('./34_Components/About'));

const App = () => {
  return (
    <div>
      {/* <Suspense fallback={<div>Loading....</div>}>
        <About />
      </Suspense> */}

      {/* The lazy loading is usually used in routes */}
      <Routes>
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <About />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
