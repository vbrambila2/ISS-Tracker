import './index.css';
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
                <button
                    onClick={() => {
                        toggleMenu();
                        dispatchAction('/');
                    }}
                    className="homeButton">
                    Home
                </button>
                <button
                     onClick={() => {
                        toggleMenu();
                        dispatchAction('/iss');
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