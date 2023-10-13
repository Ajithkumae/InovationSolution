import React from 'react';

const BackGroundImageCard = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-neutral-content">
        <div className="m-10">
          <h1 className="mb-5 text-3xl sm:text-5xl font-bold">
            Building The Future, Restoring The Past
          </h1>
          <p className="mb-5 lg:text-xl ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BackGroundImageCard;
