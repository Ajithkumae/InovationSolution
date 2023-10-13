import React from 'react';

const CarouselView = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="./slider.png" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="./slider2.png" className="rounded-box" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div>
    </>
  );
};

export default CarouselView;
