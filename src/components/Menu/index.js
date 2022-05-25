import './index.css';
import PropTypes from 'prop-types';
import React from 'react';
//import { connect } from 'react-redux';
//import { compose } from 'redux';
//import { push } from 'connected-react-router';
import { Button } from '@material-ui/core';

function Menu(props) {
    const { toggleMenu, isMenuOpen, dispatchAction } = props;

    return (
        <nav className={isMenuOpen ? 'menuBar active' : 'menuBar'} > 
            <ul className="menuBarItems" >
                <Button
                    onClick={() => {
                        toggleMenu();
                        dispatchAction('/');
                    }}
                    className="homeButton">
                    Home
                </Button>
                <Button
                     onClick={() => {
                        toggleMenu();
                        dispatchAction('/iss');
                    }}
                    className="satellitesButton">
                    Monitor ISS
                </Button>  
             </ul>
         </nav> 
    )
};

Menu.propTypes = {
    toggleMenu: PropTypes.func,
    isMenuOpen: PropTypes.bool,
};

export default (Menu);