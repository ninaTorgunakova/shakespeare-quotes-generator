import { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { PICTURES, QUOTES } from '../constants';
import './GeneratePage.scss';

const GeneratePage = () => {
  const [curQuote, setCurQuote] = useState(QUOTES[0]);
  const [pictureIdx, setPictureIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const generateQuote = (): void => {
    setLoading(true);
    setCurQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    setPictureIdx(Math.floor(Math.random() * PICTURES.length));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }
  useEffect(() => {
    const loadPicture = (path: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = path;
        loadImg.onload = () => resolve(path);
        loadImg.onerror = err => reject(err);
      });
    }
    Promise.all(PICTURES.map(picture => loadPicture(picture)))
      .then(() => setLoading(false))
  }, []);

  return (
    <div className='generate-page'>
      <img src="pictures/curtain-2.png" alt='' className='curtain-horizontal'/>
      <div className='main-column'>
        <Carousel pictureIdx={pictureIdx} picturesLoading={loading}/>
        <div className={'quote ' + (loading ? 'quote-loading' : '')}>
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
