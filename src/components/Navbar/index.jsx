import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaUserAlt, FaSignInAlt, FaPencilAlt,FaSignOutAlt,FaHouseUser } from 'react-icons/fa';
import useMediaQuery from '@mui/material/useMediaQuery';
import useAuth from 'src/context/AuthContext';
import './style.scss';

const Navbar = ({}) => {
  const auth = useAuth();
  const isMobile = useMediaQuery('(max-width: 660px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
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
              {auth.isLoggedIn ? auth.user.username : 'Guest'}
              <span className="caret"></span>
            </Button>
          </div>
        </div>
      </div>
      <Menu disableScrollLock id="auth" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {auth.isLoggedIn ? <UserMenu auth={auth}/> : <GuestMenu />}
      </Menu>
    </>
  );
};

const GuestMenu = () => {
  return (
    <>
      <MenuItem component={Link} to="/login">
        <FaSignInAlt className="mr5" />
        Login
      </MenuItem>
      <MenuItem component={Link} to="/register">
        <FaPencilAlt className="mr5" />
        Register
      </MenuItem>
    </>
  );
};

const UserMenu = ({auth}) => {
  return (
    <>
      <MenuItem component={Link} to="/dashboard">
        <FaHouseUser className="mr5" />
        Dashboard
      </MenuItem>
      <MenuItem
        onClick={() => {
          auth.logout();
          window.location.reload(false);
        }}
      >
        <FaSignOutAlt className="mr5" />
        Logout
      </MenuItem>
    </>
  );
};
export default Navbar;
