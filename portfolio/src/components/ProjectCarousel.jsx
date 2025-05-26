import { useState } from 'react';
import Styles from '../styles/portfolio.module.css';

function ProjectCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(i => {
      // if we’re at the first image, wrap to the last
      if (i === 0) return images.length - 1;
      return i - 1;
    });
  }

  const next = () => {
    setIndex(i => {
      //if we’re at the last image, wrap back to 0
      if(i=== images.length -1) return 0;
      return i + 1;
    })
  }

  return (
      
    <div className={Styles.frameOuter}>

      <button  onClick={prev} className={Styles.btn}>&#11104;</button>

      <div className={Styles.frame}>
        {(() => {
          const media = images[index];
          const isVideo = media.endsWith('.mp4') || media.endsWith('.mov');

          return isVideo
            ? (
              <video className={Styles.img} src={media} controls autoPlay loop muted />
            )
            : (
              <img className={Styles.img} src={media} alt="project media" />
            );
        })()}
      </div>

      <button style={{}} onClick={next} className={`${Styles.btn} ${Styles.btnRight}`}>&#11106;</button>

    </div>

  );
}

export default ProjectCarousel
