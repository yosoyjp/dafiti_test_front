import React, { Suspense, lazy } from 'react';

import GlobalStyles from './theme/globalStyles';
import LoadingPage from './components/LoadingPage/LoadingPage';

const ProductDetaild = lazy(() => import('./screens/ProductDetail/ProductDetaild'));

const App = () => (
  <Suspense fallback={LoadingPage}>
    <GlobalStyles />
    <ProductDetaild />
  </Suspense>
);

export default App;
