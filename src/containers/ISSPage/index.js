import React, { useEffect } from 'react';
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

const issStyles = {
    locationContainer: {
      position: 'absolute',
      zIndex: 999,
      margin: 30,
      padding: 10,
      backgroundColor: 'gray',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'white',
    },
    locationTextContainer: {
      padding: 5,
      color: 'white',
    },
    map: {
      padding: 0,
      height: '100%',
    }
}
 
function ISSPage(props) {
  const { 
    loading,
    location,
    people,
    dispatchLoadSatelliteLocation,
    dispatchLoadSatellitePeople,
  } = props;

//   useEffect(() => {
//     dispatchLoadSatelliteLocation(INITIAL_PAGE, null);
//     dispatchLoadSatellitePeople(INITIAL_PAGE, null);
//     // eslint-disable-next-line
//   }, []);

  if (loading && !location) {
    return <div>Loading...</div>; 
  }

  const issLocation = location ? location.iss_position : { latitude:0, longitude:0 };
  const peopleOnboard = people ? people.people : { name: 'Test' };

  return (
    <div>
        <section style={issStyles.locationContainer}>
            <div style={issStyles.locationTextContainer}>Latitude: {issLocation.latitude}</div>
            <div style={issStyles.locationTextContainer}>Longitude: {issLocation.longitude}</div>
            {/* <Astronauts people={peopleOnboard} /> */}
        </section>
        <section style={issStyles.map}>
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