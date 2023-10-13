import React from 'react';
interface IFlexView {
  LeftChild: React.ReactNode;
  RightChild: React.ReactNode;
  parentSty?: string;
}
const FlexViewCard: React.FC<IFlexView> = (props) => {
  const { LeftChild, RightChild, parentSty } = props;
  return (
    <div className={`flex  my-2 ${parentSty}`}>
      {LeftChild}

      {RightChild}
    </div>
  );
};

export default FlexViewCard;
