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
        },
        faqQuestionAnswerActive: {
            //display: "none",
            padding: '0.8rem',
            borderStyle: 'solid',
            borderColor: '#000000',
            borderRadius: '0.3rem',
            borderWidth: '0.1rem'
        }
    });
  });

function About(props) {
    const classes = useStyles(props);
    const { toggleFaq, isFaqOpen, faqId } = props;

    const answerOne = `
        The space station is Earth's only microgravity laboratory. This football field-sized 
        platform hosts a plethora of science and technology experiments that are continuously 
        being conducted by crew members, or are automated. Research aboard the orbiting 
        laboratory holds benefits for life back on Earth, as well as for future space exploration. 
        The space station serves as a testbed for technologies and allows us to study the 
        impacts of long-term spaceflight to humans, supporting NASA's mission to push human 
        presence farther into space. Learn more about the research happening on the space station,
         and opportunities to conduct your science there
    `
    const answerTwo = `
        The space station is visible because it reflects the light of the Sun – the same reason 
        we can see the Moon. However, unlike the Moon, the space station isn't bright enough to 
        see during the day. It can only be seen when it is dawn or dusk at your location. As such, 
        it can range from one sighting opportunity a month to several a week, since it has to be 
        both dark where you are, and the space station has to happen to be going overhead
    `
    const answerThree = `
        No, you can see the space station with your bare eyes, no equipment required
    `

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
                    <div className={classes.faqQuestion} onClick={() => toggleFaq(1)}>Why is the space station up there?</div>
                    <p className={isFaqOpen && faqId===1 ? classes.faqQuestionAnswerActive : classes.faqQuestionAnswer} id="1" >{answerOne}</p>
                    <div className={classes.faqQuestion} onClick={() => toggleFaq(2)}>How often can I expect to see the space station?</div>
                    <p className={isFaqOpen && faqId===2 ? classes.faqQuestionAnswerActive : classes.faqQuestionAnswer} id="2" >{answerTwo}</p>
                    <div className={classes.faqQuestion} onClick={() => toggleFaq(3)}>Do I need a telescope to see the space station?</div>
                    <p className={isFaqOpen && faqId===3 ? classes.faqQuestionAnswerActive : classes.faqQuestionAnswer} id="3" >{answerThree}</p>
                </section>
            </div>
        </div>
    )
}

export default About