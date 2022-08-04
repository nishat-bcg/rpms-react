import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import routes from 'src/routes/index';
import { Loading, Error as ErrorBoundary } from 'src/components/index';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              ></Route>
            );
          })}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
