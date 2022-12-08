import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as MenuLogo } from '../../images/menu-logo.svg';

const useStyles = makeStyles(theme => {
  return ({
    header: {
      backgroundColor: '#d9d9d9',
      boxShadow: '0rem 0rem 0rem 0.05rem #666666',
      position: 'relative',
      width: '100vw',
      height: 70,
      zIndex: '100',
      display: 'flex',
      justifyContent: 'space-between',
    },
    headerActive: {
        left: 352,
        backgroundColor: '#d9d9d9',
        boxShadow: '0rem 0rem 0rem 0.05rem #666666',
        position: 'relative',
        width: '81.7%',

        height: 70,
        zIndex: '100',
        display: 'flex',
        justifyContent: 'space-between',
    },
    menuLogo: {
      marginLeft: '1rem',
      backgroundColor: '#d9d9d9',
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

export default (Header);