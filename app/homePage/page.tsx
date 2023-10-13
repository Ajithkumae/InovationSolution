import CarouselView from '@/app/components/Carousel/carousel';
import Header from '@/app/components/Header/header';
import React from 'react';
import ImageCard from '../components/ImageCard/imageCard';
import ProductCard from '../components/ProductView/productCard';
import Footer from '../components/Footer/footer';
import DetailCard from '../components/DetailCard/detailCard';
import { commonStyles } from '../commonStyles/commonStyles';
import SmallCard from '../components/SmallCard/smallCard';
import BackGroundImageCard from '../components/BackGroundImageCard/backGroundImageCard';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="">
        <CarouselView />
      </div>
      <ProductCard />
      <DetailCard />
      <div className="bg-orange-500 py-10 px-6 text-white ">
        <h1 className={`${commonStyles.row_center_view} text-white-900`}>
          We Are A National Company With A Global Reach!
        </h1>
        <p className="mt-5  sm:text-left md:text-right lg:text-center ">
          Today Innomatix Global Solutions Pvt Ltd offers the world’s largest
          selection of MIL Grade Circular Connector Accessories in stock and
          available for immediate shipment.
        </p>
        <SmallCard />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
