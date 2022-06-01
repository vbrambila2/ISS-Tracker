import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import MapContainer from '../../components/Map'
import Astronauts from '../../components/Astronauts';
import { getSatellite, getAstros } from '../../actions';

const useStyles = makeStyles(theme => {
    return ({
        issPage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '3rem'
        },
        locationContainer: {
            width: '20%',
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
    });
  });

function ISSPage(props) {
  const { 
    location,
    people,
    getSatellite,
    getAstros
  } = props;

  const classes = useStyles(props);
  
    useEffect(() => {
        getSatellite();
        getAstros();
    }, [])
        
console.log(location, "location");
console.log(people, "people");

//   if (loading && !location) {
//     return <div>Loading...</div>; 
//   }

  //const issLocation = location ? location.iss_position : { latitude:0, longitude:0 };
  //const peopleOnboard = people ? people.people : { name: 'Test' };

  return (
        <div>
            <div className={classes.issPage} >
                <section className={classes.locationContainer}>
                    <div className={classes.locationTextContainer}>Latitude: {location ? location.latitude : 0 }</div>
                    <div className={classes.locationTextContainer}>Longitude: {location ? location.longitude : 0 }</div>           
                </section>
                <Astronauts people={people} />
            </div>
            <MapContainer location={location} />
        </div>
  )
}
  
const mapStateToProps = state => {
    return {
        location: state.issReducer.iss_position,
        people: state.peopleReducer.people
    }
};

const mapDispatchToProps = dispatch => {
    //let timer = null;
    return {
        getSatellite: () => {
            //uncomment two lines below to reset timer
            // clearInterval(timer);
            // timer = setInterval(() => dispatch(getSatellite()), 5000);
            dispatch(getSatellite())
        },
        getAstros: () => {
            dispatch(getAstros())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ISSPage);