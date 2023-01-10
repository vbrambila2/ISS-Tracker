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
            <p className={classes.aboutParagraph}>The space station is Earth's only 
                microgravity laboratory. This football field-sized platform hosts
                a plethora of science and technology experiments that are continuously
                being conducted by crew members, or are automated. Research aboard 
                the orbiting laboratory holds benefits for life back on Earth, 
                as well as for future space exploration. The space station serves 
                as a testbed for technologies and allows us to study the impacts 
                of long-term spaceflight to humans, supporting NASA's mission to push 
                human presence farther into space.
            </p>
        </div>
    )
}

export default About