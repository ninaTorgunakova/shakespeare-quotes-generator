import { useState } from 'react';
import GeneratePage from './GeneratePage/GeneratePage';
import StartPage from './StartPage/StartPage';

const MainPage = () => {
  const [isStartPage, setIsStartPage] = useState(true);

  return (
    <div>
      {isStartPage ? <StartPage generateQuote={() => setIsStartPage(false)}/> : <GeneratePage />}
    </div>
  );
}

export default MainPage;