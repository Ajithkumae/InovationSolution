import React, { HTMLAttributes } from 'react';

interface IProductDetailCardProps extends HTMLAttributes<HTMLDivElement> {
  imageView: string;
  productName: string;
  description: string;
  rowRev?: string;
}

const ProductDetailCard: React.FC<IProductDetailCardProps> = (props) => {
  const { productName, imageView, description, rowRev } = props;

  return (
    <div
      className={`p-10 bg-base-200  flex justify-center shadow-2xl shadow-yellow-600 `}
    >
      <div className={`lg:flex ${rowRev} lg:justify-center lg:w-10/12 `}>
        <img
          src={imageView}
          className="rounded-lg shadow-2xl "
          alt={productName}
        />
        <div
          className={`${
            rowRev ? 'lg:mr-16 lg:text-right' : 'lg:ml-16 lg:text-left'
          }`}
        >
          <h1 className="pt-5 underline underline-offset-2 text-lg font-bold">
            {productName}
          </h1>
          {description && <p className="py-3 lg:text-left ">{description}</p>}

          <button className="btn btn-primary">Get Quotation</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
