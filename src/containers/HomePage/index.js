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
        flexDirection: 'column'
    },
    appName: {
        margin: '4rem 0 2rem 0',
        fontSize: '3rem',
    },
    appDescription: {
        fontSize: '1.5rem',
    },
    instructions: {
      margin: '1rem'
    },
    potd: {
      marginTop: '5rem'
    },
    photoTitle: {
      marginTop: '2rem'
    },
    photoEx: {
      marginTop: '1rem',
      marginRight: '10rem',
      marginLeft: '10rem'
    },
    photoDate: {
      margin: '1rem'
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
        <p className={classes.appDescription}>Follow the ISS on it's journey around the globe. 
          Get real time data on it's location, visibility, current astronauts on board and more!
        </p>
        <p className={classes.instructions}>To begin, open the menu and select ISS Map</p>
        <h2 className={classes.potd}>NASA Photo of the Day</h2>
        <div className={classes.photoTitle}>Title: {photo.title}</div>
        <div className={classes.photoEx}>Description: {photo.explanation}</div>
        <div className={classes.photoDate}>Photo date: {photo.date}</div>
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