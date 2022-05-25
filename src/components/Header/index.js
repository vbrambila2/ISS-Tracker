import React from 'react';
//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ReactComponent as MenuLogo } from '../../images/menu-logo.svg';

const useStyles = makeStyles(theme => {
  return ({
    header: {
      backgroundColor: '#C4C4C4',
      position: 'relative',
      width: '100vw',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      height: 70,
      zIndex: '100',
    },
    headerActive: {
        left: 352,
        backgroundColor: '#C4C4C4',
        position: 'relative',
        width: '100vw',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        height: 70,
        zIndex: '100'
    },
    menuLogo: {
      margin: '1rem 0 0 1rem',
      backgroundColor: '#C4C4C4',
      border: 'none',
      '&:hover': {
        cursor: 'pointer'
      }
    },
  });
});

function Header(props) {
    const { toggleMenu, isMenuOpen } = props;
    const classes = useStyles(props);

    return (
        <div className={ isMenuOpen ? classes.headerActive : classes.header }>
            <button 
              className={classes.menuLogo}
              onClick={() => toggleMenu()}>
                <MenuLogo /> 
            </button>
        </div>
    );
}

// Header.propTypes = {
//   toggleMenu: PropTypes.func,
//   isMenuOpen: PropTypes.bool,
// };

export default (Header);