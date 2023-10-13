import React from 'react';
import ImageCard from '../ImageCard/imageCard';

const ProductCard = () => {
  return (
    <div className="align-middle">
      <div className="flex-col text-center">
        <span className="text-blue-600 font-semibold text-center">
          Explore our product
        </span>
        <h1 className=" lg:text-5xl md:text-3xl sm:text-3xl">Our Product</h1>
      </div>
      <div className="flex-wrap flex justify-center mt-5">
        <ImageCard
          productDeatil={
            'Backshells / Adaptors designed by Innomatix Global Solutions are devices that fastens to the rear of a connector.'
          }
          productTitle={'BACKSHELLS'}
        />
        <ImageCard
          productDeatil={
            'Backshells / Adaptors designed by Innomatix Global Solutions are devices that fastens to the rear of a connector.'
          }
          productTitle={'BACKSHELLS'}
        />
        <ImageCard
          productDeatil={
            'Backshells / Adaptors designed by Innomatix Global Solutions are devices that fastens to the rear of a connector.'
          }
          productTitle={'BACKSHELLS'}
        />
      </div>
      <div className="flex justify-center my-10">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          View All Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
