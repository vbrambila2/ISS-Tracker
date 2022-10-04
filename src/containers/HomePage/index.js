import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { getPhoto } from '../../actions';
import NasaPhoto from '../../components/Photo';

const useStyles = makeStyles(theme => {
  return ({
    Home: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#1a1a1a'
    },
    appName: {
        margin: '4rem 0 2rem 0',
        fontSize: '3rem',
        color: '#e6e6e6'
    },
    appDescription: {
        fontSize: '1.5rem',
        color: '#e6e6e6'
    },
    instructions: {
      margin: '1rem',
      color: '#e6e6e6'
    },
    potd: {
      marginTop: '4rem',
      color: '#e6e6e6',
      textDecoration: 'underline'
    },
    photoTitle: {
      marginTop: '2rem',
      color: '#e6e6e6'
    },
    photoEx: {
      marginTop: '1rem',
      marginRight: '10rem',
      marginLeft: '10rem',
      color: '#e6e6e6'
    },
    photoDate: {
      margin: '1rem',
      color: '#e6e6e6'
    }
  });
});

function HomePage(props) { 
  const {
    photo,
    getPhoto
  } = props;

  const classes = useStyles(props);

  useEffect(() => {
    getPhoto()
  }, [])

    return ( 
      <div className={classes.Home}>
        <h1 className={classes.appName}>International Space Station Tracker</h1>
        <p className={classes.appDescription}>Follow the ISS on its journey around the globe. 
          Get real time data on it's current location and the astronauts on board
        </p>
        <p className={classes.instructions}>Open the menu and select ISS Map</p>
        <h2 className={classes.potd}>NASA Photo of the Day</h2>
        <div className={classes.photoTitle}>TITLE: {photo.title}</div>
        <div className={classes.photoEx}>DESCRIPTION: {photo.explanation}</div>
        <div className={classes.photoDate}>PHOTO DATE: {photo.date}</div>
        <NasaPhoto photo={photo.hdurl}/>
      </div>
    ); 
};

const mapStateToProps = state => {
  return {
    photo: state.photoReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPhoto: () => {
      dispatch(getPhoto())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);