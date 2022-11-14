import './StartPage.scss';

const StartPage = (props: {generateQuote: () => void}) => {
  return (
    <div className='start-page'>
      <div className='column'>
        <img src='pictures/main.webp' alt='' className='start-photo'/>
      </div>
      <div className='column'>
        <div className='start-header'>
          Ask Shakespeare to share his knowledge with you...
        </div>
        <div className='button' onClick={props.generateQuote}>
          Grant me a wisdom!
        </div>
      </div>
      <img src='pictures/curtain.png' alt='' className='curtain'/>
    </div>
  );
}

export default StartPage;