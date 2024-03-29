import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import MapContainer from '../../components/Map'
import Astronauts from '../../components/Astronauts';
import { getSatellite, getAstros } from '../../actions';

const useStyles = makeStyles(() => {
    return ({
        issPage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '2rem',
        },
        locationContainer: {
            width: '83.4%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#262626',
        },
        locationText: {
            color: '#e6e6e6',
            margin: '0.5rem' 
        },
    });
});

function ISSPage(props) {
    const { 
        location,
        people,
        getSatellite,
        getAstros,
    } = props;

    const classes = useStyles(props);
    
    useEffect(() => {
        getSatellite();
        getAstros();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classes.issPage} >
            <Astronauts people={people} />
            <section className={classes.locationContainer} >
                <h3 className={classes.locationText} >Current Location:</h3>
                <div className={classes.locationText} >Latitude: {location ? location.latitude : 0 }</div>
                <div className={classes.locationText} >Longitude: {location ? location.longitude : 0 }</div>         
            </section>
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
    let timer = null;
    return {
        getSatellite: () => {
            //the lines below set the timer
            clearInterval(timer);
            timer = setInterval(() => dispatch(getSatellite()), 5000);
            dispatch(getSatellite())
        },
        getAstros: () => {
            dispatch(getAstros())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ISSPage);