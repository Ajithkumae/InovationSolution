import React from 'react';
import BackGroundImageCard from '../components/BackGroundImageCard/backGroundImageCard';
import Footer from '../components/Footer/footer';
import { commonStyles } from '../commonStyles/commonStyles';
import { MdCall, MdEmail, MdLocationPin } from 'react-icons/md';
import FlexViewCard from '../components/FlexViewCard/flexViewCard';
import Header from '../components/Header/header';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <BackGroundImageCard />
      <div className="lg:flex lg:flex-none p-10 lg:px-44  w-full justify-between">
        <div>
          <div className=" w-full  ">
            <form>
              <div className="form-control sm:flex-row sm:flex-wrap">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered my-2 sm:mx-2"
                  required
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="input input-bordered my-2 sm:mx-2"
                  required
                />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="input input-bordered my-2 sm:mx-2"
                  required
                />
              </div>
              <div className="sm:flex-row form-control  ">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="input input-bordered my-2 sm:mx-2"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Web-Site"
                  className="input input-bordered my-2 sm:mx-2"
                  required
                />
              </div>
              <div className="form-control mt-6 flex justify-center max-w-lg sm:ml-3">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-10 lg:w-7/12  ">
          <h1 className={`${commonStyles.normalBoldFont}`}>Contact Details</h1>
          <FlexViewCard
            LeftChild={<MdLocationPin style={commonStyles.iconSmall} />}
            RightChild={
              <p className={`${commonStyles.normalPara}`}>
                #89/1, Rampura, Bidarahalli, Hobli, Bangalore, Karnataka -
                560049, India
              </p>
            }
          />
          <FlexViewCard
            LeftChild={<MdEmail style={commonStyles.iconSmall} />}
            RightChild={
              <p className={`${commonStyles.normalPara}`}>
                Email: sales@innomatixglobalsolutions.com
              </p>
            }
          />
          <FlexViewCard
            LeftChild={<MdCall style={commonStyles.iconSmall} />}
            RightChild={
              <p className={`${commonStyles.normalPara}`}>
                +91 8147175040 | +91 8147175041
              </p>
            }
          />

          <h1 className={`${commonStyles.normalBoldFont}`}>Opening Hours</h1>
          <FlexViewCard
            LeftChild={<h1>Monday-Friday</h1>}
            RightChild={
              <h1 className={`${commonStyles.normalPara}`}>10:00 - 18:00</h1>
            }
            parentSty="w-10/12 sm:w-4/12 lg:w-11/12  justify-between "
          />
          <FlexViewCard
            LeftChild={<h1>Saturday</h1>}
            RightChild={
              <h1 className={`${commonStyles.normalPara}`}>10:00 - 16:00</h1>
            }
            parentSty="w-10/12 sm:w-4/12 lg:w-11/12  justify-between "
          />
          <FlexViewCard
            LeftChild={<h1>Sunday</h1>}
            RightChild={
              <h1 className={`${commonStyles.normalPara}`}>Closed</h1>
            }
            parentSty="w-10/12 sm:w-4/12 lg:w-11/12  justify-between "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
