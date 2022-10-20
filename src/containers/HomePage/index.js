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
        //backgroundColor: '#1a1a1a'
    },
    appName: {
        margin: '3rem 0 3rem 0',
        fontSize: '3rem',
        //color: '#e6e6e6'
    },
    appDescription: {
        fontSize: '1.5rem',
        //color: '#e6e6e6'
    },
    instructions: {
      margin: '1rem',
      //color: '#e6e6e6'
    },
    potd: {
      marginTop: '4rem',
      //color: '#e6e6e6',
      textDecoration: 'underline'
    },
    photoTitle: {
      marginTop: '2rem',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      //color: '#e6e6e6'
    },
    photoEx: {
      marginTop: '1rem',
      marginRight: '10rem',
      marginLeft: '10rem',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      //color: '#e6e6e6'
    },
    photoDate: {
      margin: '1rem',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      //color: '#e6e6e6'
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
        <div className={classes.photoTitle}><h3>TITLE: </h3><div>{photo.title}</div></div>
        <div className={classes.photoEx}><h3>DESCRIPTION: </h3><div>{photo.explanation}</div></div>
        <div className={classes.photoDate}><h3>PHOTO DATE: </h3> <div>{photo.date}</div></div>
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