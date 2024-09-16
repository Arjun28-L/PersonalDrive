import React, { useState } from 'react';
import DriveIMG from '../../assets/google-drive-logo.png';
import ExpandIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import Help from '@material-ui/icons/HelpOutline';
import AppIcon from '@material-ui/icons/Apps';
import SettingIcon from '@material-ui/icons/Settings';
import '../../styles/header.css';

const Index = ({ userPhoto, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={DriveIMG} alt='Google Drive Logo' />
        <span>MyDrive</span>
      </div>
      <div className='header__searchContainer'>
        <div className='header__searchBar'>
          <SearchIcon />
          <input type='text' placeholder='Search in Drive' />
          <ExpandIcon />
        </div>
      </div>
      <div className='header__icons'>
        <span>
          <Help />
          <SettingIcon />
        </span>
        <AppIcon />
        <div className='header__user'>
          <img
            src={userPhoto}
            alt='User Photo'
            onClick={handleMenuToggle}
            className='header__userPhoto'
          />
          {menuOpen && (
            <div className='header__dropdown'>
              <button className='header__logoutButton' onClick={onLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
