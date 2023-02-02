import React from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return ({
    footer: {
      background: '#262626',
      marginTop: '10rem',
      padding: '2rem',
      border: 'solid',
      borderWidth: '0.1rem 0 0 0',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '4rem 15rem 0 15rem',
      fontSize: '0.8rem',
      fontWeight: 'bold',
        
    },
    footerOptions: {
      color: '#d9d9d9',
      '&:hover': {
          cursor: 'pointer'
      }
    },
    footerCopyright: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '2rem',
      fontSize: '0.8rem',
      color: '#d9d9d9'
    }
  });
});

function Footer(props) {
  const classes = useStyles(props);

  let navigate = useNavigate(); 
    const homeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    };
    const issChange = () =>{ 
        let path = '/iss'; 
        navigate(path);
    };
    const aboutChange = () =>{ 
        let path = '/about'; 
        navigate(path);
    };

  return (
    <div className={classes.footer} >
        <div className={classes.footerLinks} >
            <div className={classes.footerOptions} onClick={() => { homeChange() }}>Home</div>
            <div style={{ color: '#d9d9d9' }} >|</div>
            <div className={classes.footerOptions} onClick={() => { issChange() }}>ISS Map</div>
            <div style={{ color: '#d9d9d9' }} >|</div>
            <div className={classes.footerOptions} onClick={() => { aboutChange() }}>About</div>
            <div style={{ color: '#d9d9d9' }} >|</div>
            <div className={classes.footerOptions} onClick={() => { homeChange() }}>API</div>
        </div>
        <div className={classes.footerCopyright} >© Copyright 2022</div>
    </div>
  );
}

export default Footer;