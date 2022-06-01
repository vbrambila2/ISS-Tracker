import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return ({
        astros: {
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    });
  });

function Astronauts(props) {
    const { 
      people,
    } = props;
  
    const classes = useStyles(props);

    const astrosContainer = people.map(astro => <div key={astro.name}>- {astro.name}</div>)
    
  //console.log(people, "people")
  
  //   if (loading && !location) {
  //     return <div>Loading...</div>; 
  //   }
  
    //const issLocation = location ? location.iss_position : { latitude:0, longitude:0 };
    //const peopleOnboard = people ? people.people : { name: 'Test' };
  
    return (
        <div className={classes.astros} >
            <h2>Astronauts currently in space:</h2>
            {!people ? "loading..." : astrosContainer }
        </div>
    )
  }
  
  export default Astronauts;