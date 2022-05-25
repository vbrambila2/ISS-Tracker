import './index.css';
import React from 'react';
//import { connect } from 'react-redux';
//import { compose } from 'redux';
//import { push } from 'connected-react-router';
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

function Menu(props) {
    const { toggleMenu, isMenuOpen, dispatchAction } = props;

    let navigate = useNavigate(); 
    const homeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    };
    const issChange = () =>{ 
        let path = '/iss'; 
        navigate(path);
    };

    return (
        <nav className={isMenuOpen ? 'menuBar active' : 'menuBar'} > 
            <ul className="menuBarItems" >
                <button
                    onClick={() => {
                        toggleMenu();
                        homeChange();
                    }}
                    className="homeButton">
                    Home
                </button>
                <button
                     onClick={() => {
                        toggleMenu();
                        issChange();
                    }}
                    className="satellitesButton">
                    Monitor ISS
                </button>  
             </ul>
        </nav> 
    )
};

const mapStateToProps = state => {
    return {

    }
}

export default (Menu);