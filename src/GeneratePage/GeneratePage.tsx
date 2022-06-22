import { useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { PICTURES, QUOTES } from '../constants';
import './GeneratePage.scss';

const GeneratePage = () => {
  const [curQuote, setCurQuote] = useState(QUOTES[0]);
  const [pictureIdx, setPictureIdx] = useState(0);
  const generateQuote = (): void => {
    setCurQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    setPictureIdx(Math.floor(Math.random() * PICTURES.length))
  }
  return (
    <div className='generate-page'>
      <img src="pictures/curtain-2.png" alt='' className='curtain-horizontal'/>
      <div className='main-column'>
        <Carousel pictureIdx={pictureIdx}/>
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
