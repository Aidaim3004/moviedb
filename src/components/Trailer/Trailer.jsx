import React from 'react';
import './Trailer.css'

const Trailer = () => {
  return (
    <div className="trailer">
      <div className="flex">
        <h4>Последние трейлеры</h4>
       <div className="trailer-btn">
         <button>По ТВ</button>
         <button>В кинотеатрах</button>
       </div>
      </div>
         <div className="trailer-video"></div>
    </div>
  );
};

export default Trailer;