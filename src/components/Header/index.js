import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ReactComponent as MenuLogo } from '../../images/menu-logo.svg';

const useStyles = makeStyles(theme => {
  return ({
    header: {
      backgroundColor: '#C4C4C4',
      minHeight: '50px',
      position: 'relative',
      width: '100vw',
      left: props => props.isMenuOpen ? 350 : 0,
      transition: '350ms',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      height: 70,
      zIndex: '100'
    },
  });
});

function Header(props) {
    const { toggleMenu, isMenuOpen } = props;
    const classes = useStyles(props);

    return (
    <section className={classes.header}>
        <div>
            <Button onClick={() => toggleMenu(isMenuOpen)}>
                <MenuLogo /> 
            </Button>
        </div>
    </section>
    );
}

Header.propTypes = {
  toggleMenu: PropTypes.func,
  isMenuOpen: PropTypes.bool,
};

export default (Header);