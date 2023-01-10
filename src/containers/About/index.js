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
        }
    });
  });

function About(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.About}>
            <section className={classes.aboutTitle}>About the ISS</section>
        </div>
    )
}

export default About