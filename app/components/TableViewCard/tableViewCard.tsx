import { commonStyles } from '@/app/commonStyles/commonStyles';
import React from 'react';
interface ITableViewCard {
  title: string;
}
const TableViewCard: React.FC<ITableViewCard> = (props) => {
  const { title } = props;
  return (
    <div className="overflow-x-auto">
      <h1 className={`${commonStyles.normalBoldFont}`}>{title}</h1>
      <table className="table w-full">
        <tbody>
          <tr>
            <th className="w-0">1</th>
            <td>Cy Ganderton</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableViewCard;
