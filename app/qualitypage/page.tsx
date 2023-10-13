import React from 'react';
import BackGroundImageCard from '../components/BackGroundImageCard/backGroundImageCard';
import TableViewCard from '../components/TableViewCard/tableViewCard';
import { commonStyles } from '../commonStyles/commonStyles';
import Footer from '../components/Footer/footer';
import SmallCard from '../components/SmallCard/smallCard';
import Header from '../components/Header/header';

const QualityPage = () => {
  return (
    <div>
      <Header />
      <BackGroundImageCard />
      <div className="lg:mx-56 m-6 sm:m-10">
        <h1 className={`${commonStyles.normalBoldFont} `}>Quality Policy</h1>
        <p className="text-sm md:text-lg">
          Innomatix is maintaining a quality management system conforming ISO
          9001:2015 obtained from QCC (UASL). With quality as important business
          principle, Innomatix Global Solutions Pvt. Ltd. Seeks for continual
          improvement of their quality management system, business processes and
          delivery model for providing their customers with innovative products
          and solutions that fully satisfy their requirements first time and
          every time.
        </p>
        <TableViewCard title={'Quality Objective'} />
      </div>
      <div className="bg-orange-400">
        <SmallCard />
      </div>
      <Footer />
    </div>
  );
};

export default QualityPage;
