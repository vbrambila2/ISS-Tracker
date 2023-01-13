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
            fontSize: '2.7rem',
        },
        aboutParagraph: {
            width: '75%',
        },
        faq: {
             margin: '2rem 2rem 0 15rem'
        },
        faqTitle: {
            margin: '2rem 0 2rem 0',
            fontSize: '2rem',
        },
        faqQuestion: {
            margin: '0.5rem 15rem 0.5rem 0',
            padding: '0.8rem',
            background: '#e6e6e6',
            borderStyle: 'solid',
            borderColor: '#b6b6b6',
            borderRadius: '0.3rem',
            borderWidth: '0.1rem'
        },
        faqQuestionAnswer: {
            display: "none",
            padding: '0.8rem',
            borderStyle: 'solid',
            borderColor: '#b6b6b6',
            borderRadius: '0.3rem',
            borderWidth: '0.1rem'
        }
    });
  });

function About(props) {
    const classes = useStyles(props);

    const showAnswer = () => {
        document.getElementById('1').style.display = "block";
    }

    return (
        <div>
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
            <div className={classes.faq}>
                <section>
                    <div className={classes.faqTitle}>Frequently asked questions</div>
                    <div className={classes.faqQuestion} onClick={() => showAnswer()}>Why is the space station up there?</div>
                    <p className={classes.faqQuestionAnswer} id="1">answer</p>
                    <div className={classes.faqQuestion}>How often can I expect to see the space station?</div>
                    <p className={classes.faqQuestionAnswer}>answer</p>
                    <div className={classes.faqQuestion}>Do I need a telescope to see the space station?</div>
                    <p className={classes.faqQuestionAnswer}>answer</p>
                </section>
            </div>
        </div>
    )
}

export default About