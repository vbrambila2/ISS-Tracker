import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return ({
    Home: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    appName: {
        margin: '4rem 0 4rem 0',
        fontSize: '3rem',
    },
    appDescription: {
        fontSize: '1.5rem',
    }
  });
});

export default function HomePage(props) { 
  const classes = useStyles(props);

    return ( 
        <div className={classes.Home}>
            <h1 className={classes.appName}>International Space Station Tracker</h1>
            <p className={classes.appDescription}>Follow the ISS on it's journey around the globe. 
            Get real time data on it's location, visibility, current astronauts on board and more!</p>
        </div>
    ); 
};