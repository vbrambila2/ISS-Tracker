import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return ({
        
    });
  });

function Astronauts(props) {
    const { 
      people,
    } = props;
  
    const classes = useStyles(props);
    
  //console.log(people, "people")
  
  //   if (loading && !location) {
  //     return <div>Loading...</div>; 
  //   }
  
    //const issLocation = location ? location.iss_position : { latitude:0, longitude:0 };
    //const peopleOnboard = people ? people.people : { name: 'Test' };
  
    return (
      <div className={classes.issPage} >
          {!people ? "loading..." : people.map((astro) =>
            <li key={astro.name}>{astro.name}</li>
        )}
      </div>
    )
  }
  
  export default Astronauts;