import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

/* ProjectCard.propTypes = {
  type: PropTypes.oneOf(['image', 'video']).isRequired,
}; */



export default function ProjectCard({type,colSpan,img,video,title,buttonPath,buttonTitle,category,year}:any) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (type === 'image') {
    return (

      
      <div className={colSpan}>
              
        <div  className="card">
          
          <Image src={img} alt="" width={1000} height={1000} style={{position:"relative",objectFit:"contain"}}  />
        </div>

        <div className="py-4">
          <div className="cardDescription">
            <div className="cardProduct">{title}</div>
            <button className="cardBtn cardBtnText">
              <a href={buttonPath}>{buttonTitle}</a>
            </button>
          </div>

          <div className="cardDescription">
            <div className="caption">{category}</div>
            <div className="cardYear">{year}</div>
          </div>
        </div>
        
      </div>
    );
  } 
  else if (type === 'video') {
    return (
      <div className={colSpan}>
        {isClient && (
          <div className="card">
            <ReactPlayer loop={true} muted={true} controls={true} url={video} alt="" fill  /> </div>
        )}

        <div className="py-4">
          <div className="cardDescription">
            <div className="cardProduct">{title}</div>
            <button className="cardBtn cardBtnText">
              <a href={buttonPath}>{buttonTitle}</a>
            </button>
          </div>

          <div className="cardDescription">
            <div className="caption">{category}</div>
            <div className="cardYear">{year}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
