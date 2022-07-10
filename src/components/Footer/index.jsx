import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './style.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__madeby">
        Made with <FavoriteBorderIcon sx={{ mr: 1, ml: 1, color: '#4361ee' }} /> by VnC Fans
      </div>
    </div>
  );
};

export default Footer;
