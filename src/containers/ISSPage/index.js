import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';
//import { connect } from 'react-redux';
//import { compose } from 'redux';
//import MapContainer from '../../components/Map'
//import Astronauts from '../../components/Astronauts';
import { getSatellite } from '../../actions';

const useStyles = makeStyles(theme => {
    return ({
        issPage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '3rem'
        },
        locationContainer: {
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'gray',
            borderWidth: '1 rem',
            borderStyle: 'solid',
            borderColor: 'black',
        },
        locationTextContainer: {
            margin: '1rem',
            color: 'white',
        },
        map: {
            padding: 0,
            height: '100%',
        }
    });
  });

function ISSPage(props) {
  const { 
    location,
    getSatellite
  } = props;

  const classes = useStyles(props);
  
  useEffect(() => {
        getSatellite()
  }, [getSatellite])
        
console.log(location)

//   if (loading && !location) {
//     return <div>Loading...</div>; 
//   }

  //const issLocation = location ? location.iss_position : { latitude:0, longitude:0 };
  //const peopleOnboard = people ? people.people : { name: 'Test' };

  return (
    <div className={classes.issPage} >
        <section className={classes.locationContainer}>
            <div className={classes.locationTextContainer}>Latitude: {location.latitude}</div>
            <div className={classes.locationTextContainer}>Longitude: {location.longitude}</div>
            {/* <Astronauts people={peopleOnboard} /> */}
        </section>
        <section className={classes.map}>
            {/* <MapContainer location={issLocation} /> */}
        </section>
    </div>
  )
}
  
const mapStateToProps = state => {
    return {
        location: state.issReducer.iss_position
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getSatellite: () => {
            dispatch(getSatellite())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ISSPage);