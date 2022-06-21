import { useState } from 'react';
import './GeneratePage.scss';

const GeneratePage = () => {
  const quotes: string[] = ['To be or not to be', 'Nothing is bad and nothing is good', 'Auf'];
  const [curQuote, setCurQuote] = useState(quotes[0]);
  const generateQuote = (): void => {
    setCurQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }
  return (
    <div className='generate-page'>
      <img src="pictures/curtain-2.png" alt='' className='curtain-horizontal'/>
      <div className='main-column'>
        <div className='carousel'>
          <img src="pictures/1.jpg" alt='' className='picture'/>
        </div>
        <div className='quote'>
          {curQuote}
        </div>
        <div className='button' onClick={generateQuote}>
          Grant me a wisdom!
        </div>
      </div>
    </div>
  );
}

export default GeneratePage;