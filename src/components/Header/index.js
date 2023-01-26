import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as MenuLogo } from '../../images/menu-logo.svg';
import SpaceLogo from '../../images/pexels-kai-pilger-1341279.jpg';

const useStyles = makeStyles(theme => {
  return ({
    header: {
      backgroundColor: '#d9d9d9',
      boxShadow: '0rem 0rem 0rem 0.05rem #666666',
      padding: '0rem 1rem 0rem 1rem',
      position: 'relative',
      width: '100vw',
      height: 80,
      zIndex: '100',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundImage: `url(${SpaceLogo})`,
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
    },
    headerActive: {
        left: 352,
        backgroundColor: '#d9d9d9',
        boxShadow: '0rem 0rem 0rem 0.05rem #666666',
        padding: '0rem 1rem 0rem 1rem',
        position: 'relative',
        width: '81.7%',

        height: 70,
        zIndex: '100',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    // spaceLogo: {
    //   width: '100%',
    //   height: '100%',
    //   zIndex: '-1'
    // },
    menuLogo: {
      background: 'none',
      border: 'none',
      '&:hover': {
        cursor: 'pointer'
      }
    },
  });
});
//<img src={SpaceLogo} alt="stars in space" className={classes.spaceLogo} />

function Header(props) {
  const { toggleMenu, isMenuOpen } = props;
  const classes = useStyles(props);

  return (
    <div className={ isMenuOpen ? classes.headerActive : classes.header } >
      <button 
        className={classes.menuLogo}
        onClick={() => toggleMenu()}>
        <MenuLogo /> 
      </button>
    </div>
  );
}

export default (Header);