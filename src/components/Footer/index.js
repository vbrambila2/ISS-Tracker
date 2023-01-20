import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return ({
    footer: {
        background: '#d9d9d9',
        marginTop: '10rem',
        padding: '7rem'
    }
  });
});

function Footer(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.footer}>
        <div>Copyright</div>
        <div>Home</div>
        <div>ISS Map</div>
        <div>About</div>
        <div>API</div>
    </div>
  );
}

export default Footer;