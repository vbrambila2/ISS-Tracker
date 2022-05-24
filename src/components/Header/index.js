import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid, makeStyles } from '@material-ui/core';
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
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.header}>
      <Grid item>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid item>
            <Button onClick={() => toggleMenu(isMenuOpen)}>
             <MenuLogo /> 
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {props.currentUser && (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center">
          <Grid item style={{ marginRight: 10 }}>
            Help
          </Grid>
            <Grid item style={{ marginRight: 10 }}>
              <Avatar
                src={props.currentUser && props.currentUser.imageUrl}
                variant="rounded"
                style={{ width: 40, height: 40 }}/>
            </Grid>
            <Grid item style={{ marginRight: 20 }}>
              {props.currentUser && props.currentUser.firstname}
            </Grid>
        </Grid>
        )}
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  currentUser: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.string,
  ]),
};

export default (Header);