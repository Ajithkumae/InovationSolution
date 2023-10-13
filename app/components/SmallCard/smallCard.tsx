import React from 'react';
import { commonStyles } from '../../commonStyles/commonStyles';
import { BiRecycle } from 'react-icons/bi';
const SmallCard = () => {
  return (
    <div className={commonStyles.row_center_view}>
      <div className="my-10 mx-5">
        <div className="h-20 w-20 flex justify-center items-center">
          <BiRecycle className="h-16 w-16 " />
        </div>
        <span className={commonStyles.row_center_view}>Card Title</span>
      </div>
      <div className="my-10 mx-5">
        <div className="h-20 w-20 flex justify-center items-center">
          <BiRecycle className="h-16 w-16 " />
        </div>
        <span className={commonStyles.row_center_view}>Card Title</span>
      </div>
      <div className="my-10 mx-5">
        <div className="h-20 w-20 flex justify-center items-center">
          <BiRecycle className="h-16 w-16 " />
        </div>
        <span className={commonStyles.row_center_view}>Card Title</span>
      </div>
    </div>
  );
};

export default SmallCard;
