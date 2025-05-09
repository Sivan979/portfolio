import React from 'react';
import { useState } from 'react';
import Styles from '../styles/portfolio.module.css';

function ProjectCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => Math.max(i - 1, 0));
  const next = () => setIndex(i => Math.min(i + 1, images.length - 1));

  return (
    <div className={Styles.imgContainer}>
      <div
        className={Styles.slides}
        style={{
          transform: `translateX(-${index * 100}%)`,
          width: `${images.length * 100}%`
        }}
      >
        {images.map((media, i) => {
          
          const isVideo = media.endsWith('.mp4') || media.endsWith('.mov');

          return isVideo ? (
            <video key={i} className={Styles.img} src={media} controls autoPlay loop muted />
          ) : (
            <img key={i} className={Styles.img} src={media} alt="project media"/>
          );
        })}
      </div>

      <button onClick={prev} disabled={index === 0} className={Styles.btn}>&#11104;</button>

      <button onClick={next} disabled={index === images.length - 1} className={Styles.btn}>&#11106;</button>
    </div>
  );
}

export default ProjectCarousel
