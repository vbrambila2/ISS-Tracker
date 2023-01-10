import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return ({
        astros: {
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '1.2rem',
        }
    });
  });

function Astronauts(props) {
    const { 
        people,
    } = props;
  
    const classes = useStyles(props);
    const astrosContainer = people.map(astro => <div key={astro.name}>{astro.name}</div>)
  
    return (
        <div className={classes.astros} >
            <h2>Astronauts currently aboard the ISS:</h2>
            {!people ? "loading..." : astrosContainer }
        </div>
    )
  }
  
  export default Astronauts;