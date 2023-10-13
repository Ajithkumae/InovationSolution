import React from 'react';
interface Icard {
  productDeatil: string;
  productTitle: string;
}
const ImageCard = (props: Icard) => {
  const { productDeatil, productTitle } = props;
  return (
    <div className="card w-96 bg-base-100 shadow-md m-4">
      <span className="text-center text-2xl">{productTitle}</span>
      <figure className="px-10 pt-10">
        <img
          src="./productImage1.png"
          alt="Shoes"
          className="rounded-xl m-5 "
        />
      </figure>
      <p className="p-4 text-center">{productDeatil}</p>
    </div>
  );
};

export default ImageCard;
