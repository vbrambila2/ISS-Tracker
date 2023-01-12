import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return ({
        About: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        aboutTitle: {
            margin: '3rem 0 3rem 0',
            fontSize: '2.5rem',
        },
        aboutParagraph: {
            width: '75%',
        }
    });
  });

function About(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.About}>
            <section className={classes.aboutTitle}>About the ISS</section>
            <p className={classes.aboutParagraph}>The International Space Station is a 
                large spacecraft in orbit around Earth. It serves as a home where crews
                 of astronauts and cosmonauts live. The space station is also a unique 
                 science laboratory. Several nations worked together to build and use 
                 the space station. The space station is made of parts that were 
                 assembled in space by astronauts. It orbits Earth at an average 
                 altitude of approximately 250 miles. It travels at 17,500 mph. This 
                 means it orbits Earth every 90 minutes. NASA is using the space 
                 station to learn more about living and working in space. These 
                 lessons will make it possible to send humans farther into space than 
                 ever before.
            </p>
        </div>
    )
}

export default About