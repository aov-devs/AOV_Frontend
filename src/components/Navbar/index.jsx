import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaUserAlt, FaSignInAlt, FaPencilAlt } from 'react-icons/fa';
import useMediaQuery from '@mui/material/useMediaQuery';
import './style.scss';

const Navbar = ({}) => {
  const isMobile = useMediaQuery('(max-width: 660px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            The Archive of Vanitas
          </Link>
          <div className="navbar__right">
            <Button
              id="auth"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              MenuListProps={{
                'aria-labelledby': 'auth',
              }}
            >
              <FaUserAlt className="mr5" />
              Guest
              <span className="caret"></span>
            </Button>
          </div>
        </div>
      </div>
      <Menu  disableScrollLock id="auth" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem component={Link} to="/login">
          <FaSignInAlt className="mr5" />
          Register
        </MenuItem>
        <MenuItem component={Link} to="/register">
          <FaPencilAlt className="mr5" />
          Login
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
