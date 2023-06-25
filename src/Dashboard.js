import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


// const data = [
//   {
//     name: "Dotcom.inc",
//     date: "",
//     type: "Automatic Payment",
//     status: "Done",
//     amount: 99
//   },
//   {
//     name: "Dotcom.inc",
//     date: "",
//     type: "Cash Payment",
//     status: "Done",
//   },
//   {
//     name: "Dotcom.inc",
//     date: "",
//     type: "Automatic Payment",
//     status: "Not Done",
//   }
// ]



const options = [
  {
    label: 'Date: Last 90 days',
    value: 'Date: Last 90 days',
  },
  {
    label: 'Type',
    value: 'Type',

  },
  {
    label: 'Status',
    value: 'Status',

  },
];

function Dashboard() {

  const [value, setValue] = useState('Apple');

  const onChange = ({ target: { value } }) => {
    console.log('radio4 checked', value);
    setValue(value);
  };

  return (
    <div className="dashboard-container">
      <div className="input-container">
        <div className='input-content'>
          <Input className='input' size="small" placeholder="Search by name or email" prefix={<SearchOutlined />} />
        </div>
        <div className="download-icon-content">
          <Button className='download-icon' type="" shape="circle" icon={<DownloadOutlined />} />
        </div>
      </div>
      <div className="filter-item-container">
        <p style={{ margin: "1rem 0",fontWeight:"500",fontSize:".8rem" }}>Filter by</p>
        <div>
          <Radio.Group
            options={options}
            onChange={onChange}
            value={value}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <p style={{fontWeight:"600",fontSize:".8rem",letterSpacing:"6" }}>Completed</p>
        <p style={{ color: "grey" }}>This week</p>

        <div className='filter-detail-content'>
          <div style={{ display: "flex" }}>
            <div>
              <img className='filtered-img'src="./img1.jpg" alt="img" />
            </div>
            <div style={{marginTop:".8rem"}}>
              <p style={{fontWeight:"600",fontSize:".8rem" }}>Name.com Inc.</p>
              <p style={{fontWeight:"",fontSize:".7rem" }}>Jun 22 Automatic Payment</p>
            </div>
          </div>
          <div>
            <p style={{fontWeight:"600",fontSize:".8rem",marginTop:"1.8rem" }}>
              -$9.89
            </p>
          </div>
        </div>
        <div className='filter-detail-content'>
          <div style={{ display: "flex" }}>
            <div>
              <img className='filtered-img' src="./img1.jpg" alt="./img" />
            </div>
            <div style={{marginTop:".8rem"}}>
              <p style={{fontWeight:"600",fontSize:".8rem" }}>Name.com Inc.</p>
              <p style={{fontWeight:"",fontSize:".7rem" }}>Jun 22 Automatic Payment</p>
            </div>
          </div>
          <div>
            <p style={{fontWeight:"600",fontSize:".8rem",marginTop:"1.8rem" }}>
              -$9.89
            </p>
          </div>
        </div>
        <div className='filter-detail-content'>
          <div style={{ display: "flex" }}>
            <div>
              <img className='filtered-img' src="./img1.jpg" alt="./img" />
            </div>
            <div style={{marginTop:".8rem"}}>
              <p style={{fontWeight:"600",fontSize:".8rem" }}>Name.com Inc.</p>
              <p style={{fontWeight:"",fontSize:".7rem" }}>Jun 22 Automatic Payment</p>
            </div>
          </div>
          <div>
            <p style={{fontWeight:"600",fontSize:".8rem",marginTop:"1.8rem" }}>
              -$9.89
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;