import React from 'react';
import { makeStyles } from '@material-ui/core';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SpaceShuttle from '../../images/iss.jpeg';

const useStyles = makeStyles(() => {
    return ({
        about: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        aboutTop: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            background: `linear-gradient(to bottom, ${'#050209'} 36%, ${'#015190'} 65%)`,
            boxShadow: '0rem 7.9rem #025190'
        },
        aboutTitle: {
            width: '75%',
            margin: '4rem 0 1rem 0',
            fontSize: '3rem',
            color: '#f1f1f1'
        },
        aboutPic: {
            height: '25rem',
            width: '35rem',
            margin: '3rem 0 0 0',
        },
        aboutParagraph: {
            width: '75%',
        },
        faq: {
             margin: '2rem 15rem 0 15rem'
        },
        faqTitle: {
            margin: '2rem 0 2rem 0',
            fontSize: '2rem',
            borderBottom: '0.1rem, solid, #b6b6b6'
        },
        faqQuestion: {
            margin: '0.5rem 0 0.5rem 0',
            padding: '0.8rem',
            background: '#e6e6e6',
            borderStyle: 'solid',
            borderColor: '#b6b6b6',
            borderRadius: '0.3rem',
            borderWidth: '0.1rem',
            '&:hover': {
                cursor: 'pointer'
              }
        },
        faqQuestionAnswer: {
            display: "none",
            margin: '0.5rem 0 0.5rem 0',
            padding: '0.8rem',
            borderStyle: 'solid',
            borderColor: '#b6b6b6',
            borderRadius: '0.3rem',
            borderWidth: '0.1rem'
        },
        faqQuestionAnswerActive: {
            margin: '0.5rem 0 0.5rem 0',
            padding: '0.8rem',
            borderStyle: 'solid',
            borderColor: '#b6b6b6',
            borderRadius: '0.3rem',
            borderWidth: '0.1rem'
        },
    });
  });

function About(props) {
    const { toggleFaq, 
        isFaqOpen, 
        faqId 
    } = props;

    const classes = useStyles(props);

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
    const answerFour = `
        The ISS circles the Earth every 90 minutes. It travels at about 17,500 miles (28,000 km) 
        per hour, which gives the crew 16 sunrises and sunsets every day. In the more than 15 years 
        that people have been living onboard, the Station has circumnavigated the Earth tens of 
        thousands of times 
    `
    const answerFive = `
        The space station has the volume of a five-bedroom house or two Boeing 747 jetliners. 
        It is able to support a crew of six people, plus visitors. On Earth, the space station 
        would weigh almost a million pounds. Measured from the edges of its solar arrays, the 
        station covers the area of a football field including the end zones. It includes laboratory 
        modules from the United States, Russia, Japan and Europe
    `

    return (
        <div>
            <div className={classes.about} >
                <section className={classes.aboutTop}>
                    <img src={SpaceShuttle} alt="space station floating in space" className={classes.aboutPic} />        
                </section>
                <div className={classes.aboutTitle} >About the ISS<hr></hr></div>
                <p className={classes.aboutParagraph} >The International Space Station is a 
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
            <div className={classes.faq} >
                <section>
                    <div className={classes.faqTitle} ><QuestionAnswerIcon /> Frequently asked questions<hr></hr></div>
                    <div className={classes.faqQuestion} onClick={() => toggleFaq(1)} >Why is the space station up there?</div>
                    <p className={isFaqOpen && faqId===1 ? classes.faqQuestionAnswerActive : classes.faqQuestionAnswer} id="1" >{answerOne}</p>
                    <div className={classes.faqQuestion} onClick={() => toggleFaq(2)} >How often can I expect to see the space station?</div>
                    <p className={isFaqOpen && faqId===2 ? classes.faqQuestionAnswerActive : classes.faqQuestionAnswer} id="2" >{answerTwo}</p>
                    <div className={classes.faqQuestion} onClick={() => toggleFaq(3)} >Do I need a telescope to see the space station?</div>
                    <p className={isFaqOpen && faqId===3 ? classes.faqQuestionAnswerActive : classes.faqQuestionAnswer} id="3" >{answerThree}</p>
                    <div className={classes.faqQuestion} onClick={() => toggleFaq(4)} >How fast is the space station traveling?</div>
                    <p className={isFaqOpen && faqId===4 ? classes.faqQuestionAnswerActive : classes.faqQuestionAnswer} id="4" >{answerFour}</p>
                    <div className={classes.faqQuestion} onClick={() => toggleFaq(5)} >How big is the space station?</div>
                    <p className={isFaqOpen && faqId===5 ? classes.faqQuestionAnswerActive : classes.faqQuestionAnswer} id="5" >{answerFive}</p>
                </section>
            </div>
        </div>
    )
}

export default About;