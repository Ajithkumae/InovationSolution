import React from 'react';
import BackGroundImageCard from '../components/BackGroundImageCard/backGroundImageCard';
import Footer from '../components/Footer/footer';
import ProductDetailCard from '../components/ProductView/productDetailCard';
import Header from '../components/Header/header';

const ProductPage = () => {
  return (
    <div>
      <Header />
      <BackGroundImageCard />
      <ProductDetailCard
        imageView={'./productImage1.png'}
        productName={'STRAIN RELIEF CLAMP BACKSHELL'}
        rowRev={'flex-row-reverse'}
        description="INNOMATIX EMI/RFI Environmental backshells ensure connector reliability and performance by adding extra protection from external hazards. Environmental backshells utilize glands to seal both entry points, preventing the ingress of dust, dirt, moisture, and liquids. Additional shield termination hardware provides EMI/RFI protection. INNOMATIX EMI/RFI Environmental backshells are available in straight, 45°, or 90° configurations, with a host of design options to meet modern interconnect designs."
      />
      <ProductDetailCard
        imageView={'./productImage1.png'}
        productName={'STRAIN RELIEF CLAMP BACKSHELL'}
        description="INNOMATIX EMI/RFI Environmental backshells ensure connector reliability and performance by adding extra protection from external hazards. Environmental backshells utilize glands to seal both entry points, preventing the ingress of dust, dirt, moisture, and liquids. Additional shield termination hardware provides EMI/RFI protection. INNOMATIX EMI/RFI Environmental backshells are available in straight, 45°, or 90° configurations, with a host of design options to meet modern interconnect designs."
      />
      <Footer />
    </div>
  );
};

export default ProductPage;
