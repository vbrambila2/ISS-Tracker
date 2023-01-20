import React from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return ({
    footer: {
        background: '#d9d9d9',
        color: '#262626',
        marginTop: '10rem',
        padding: '2rem',
        border: 'solid',
        borderWidth: '0.1rem 0 0 0',
    },
    footerOptions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '4rem 15rem 0 15rem',
    },
    footerCopyright: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem',
        fontSize: '0.8rem',
        color: '#666666'
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
        <div className={classes.footerOptions} >
            <div onClick={() => { homeChange() }}>Home</div>
            <div onClick={() => { issChange() }}>ISS Map</div>
            <div onClick={() => { aboutChange() }}>About</div>
            <div onClick={() => { homeChange() }}>API</div>
        </div>
        <div className={classes.footerCopyright} >Copyright 2022</div>
    </div>
  );
}

export default Footer;