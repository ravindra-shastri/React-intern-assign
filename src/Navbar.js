
import { SettingOutlined, BellOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
  {
    label: 'Home',
    key: '1',
  },
  {
    label: 'Finances',
    key: '2',
  },
  {
    label: 'Send and Request',
    key: '3',
  },
  {
    label: 'Deals',
    key: '4',
  },
  {
    label: 'Wallet',
    key: '5',
  },
  {
    label: 'Activity',
    key: '6',
  },
  {
    label: 'Help',
    key: '7',
  },

];


function Navbar() {
  const [current, setCurrent] = useState('6');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="navbar-content">
      <div>
        <p><i className="fa-brands fa-paypal logo"></i></p>
      </div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <div className='nav-btn-content'>
        <p className="notification-icon"><BellOutlined /></p>
        <p className="setting-icon"><SettingOutlined /></p>
        <p className="log-out-btn">LOG OUT</p>
      </div>
    </div>
  );
}

export default Navbar;



