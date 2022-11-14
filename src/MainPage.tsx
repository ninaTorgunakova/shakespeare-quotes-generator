import React, { Suspense, useState } from 'react';
import StartPage from './StartPage/StartPage';

import './MainPage.scss';

const MainPage = () => {
  const [isStartPage, setIsStartPage] = useState(true);
  const GeneratePage = React.lazy(() => import('./GeneratePage/GeneratePage'))

  return (
    <>
      {isStartPage ?
        <StartPage generateQuote={() => setIsStartPage(false)}/> :
        <Suspense fallback={<div className="loader">Loading...</div>}><GeneratePage /></Suspense>}
    </>
  );
}

export default MainPage;