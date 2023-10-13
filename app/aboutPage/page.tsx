import React from 'react';
import DetailCard from '../components/DetailCard/detailCard';
import Footer from '../components/Footer/footer';
import BackGroundImageCard from '../components/BackGroundImageCard/backGroundImageCard';
import VisionMissionCard from '@/app/components/check/check';
import Header from '../components/Header/header';
const AboutPage = () => {
  return (
    <div>
      <Header />
      <BackGroundImageCard />
      <div className="bg-gray-100  flex items-center justify-center">
        <VisionMissionCard />
      </div>
      <DetailCard />
      <Footer />
    </div>
  );
};

export default AboutPage;
