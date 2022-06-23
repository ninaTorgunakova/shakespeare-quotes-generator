import { PICTURES } from '../constants';
import './Carousel.scss';

const Carousel = (props: {pictureIdx: number, picturesLoading: boolean}) => {
  const getPicturePath = (index: number): string => {
    const pictureIndex: number = props.pictureIdx + index;
    if (pictureIndex < 0) {
      return PICTURES[-pictureIndex];
    } else if (pictureIndex >= PICTURES.length) {
      return PICTURES[pictureIndex - PICTURES.length];
    } else {
      return PICTURES[pictureIndex];
    }
  }
  return (
    <div className={'carousel ' + (props.picturesLoading ? 'pictures-loading' : '')}>
      <img src={getPicturePath(-2)} alt='' className='small'/>
      <img src={getPicturePath(-1)} alt='' className='medium'/>
      <img src={getPicturePath(0)} alt='' className='main'/>
      <img src={getPicturePath(1)} alt='' className='medium'/>
      <img src={getPicturePath(2)} alt='' className='small'/>
    </div>
  );
}

export default Carousel;