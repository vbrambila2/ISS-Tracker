import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
//import { connect } from 'react-redux';
//import { compose } from 'redux';
//import MapContainer from '../../components/Map'
//import Astronauts from '../../components/Astronauts';
//import { getSatelliteLocation, getSatellitePeople } from './actions';
// import {
//   makeSelectLoading,
//   makeSelectPage,
//   makeSelectSatelliteLocation,
//   makeSelectSatellitePeople,
// } from './selectors';
//import { INITIAL_PAGE } from './constants';

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
    loading,
    location,
    people,
    dispatchLoadSatelliteLocation,
    dispatchLoadSatellitePeople,
  } = props;

  const classes = useStyles(props);

//   useEffect(() => {
//     dispatchLoadSatelliteLocation(INITIAL_PAGE, null);
//     dispatchLoadSatellitePeople(INITIAL_PAGE, null);
//     // eslint-disable-next-line
//   }, []);

    // let res = axios.get('http://api.open-notify.org/iss-now.json');
    // let data = res.data;
    // console.log(res);

    axios.get('http://api.open-notify.org/iss-now.json')
        .then(res => {
            let data = res.data;
            console.log(data);
        })

        


  if (loading && !location) {
    return <div>Loading...</div>; 
  }

  const issLocation = location ? location.iss_position : { latitude:0, longitude:0 };
  const peopleOnboard = people ? people.people : { name: 'Test' };

  return (
    <div className={classes.issPage} >
        <section className={classes.locationContainer}>
            <div className={classes.locationTextContainer}>Latitude: {}</div>
            <div className={classes.locationTextContainer}>Longitude: {issLocation.longitude}</div>
            {/* <Astronauts people={peopleOnboard} /> */}
        </section>
        <section className={classes.map}>
            {/* <MapContainer location={issLocation} /> */}
        </section>
    </div>
  )
}
  
// const mapStateToProps = createStructuredSelector({
//     loading: makeSelectLoading(),
//     page: makeSelectPage(),
//     location: makeSelectSatelliteLocation(),
//     people: makeSelectSatellitePeople(),
// });

// function mapDispatchToProps(dispatch) {
//   let timer = null;
//   return {
//     dispatchLoadSatelliteLocation: () => {
//       clearInterval(timer);
//       timer = setInterval(() => dispatch(getSatelliteLocation("GET")), 1000);
//     },
//     dispatchLoadSatellitePeople: () => {
//       dispatch(getSatellitePeople("GET"));
//     },
//   };
// };

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

export default ISSPage;