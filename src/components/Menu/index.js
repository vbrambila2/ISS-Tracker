import './index.css';
import React from 'react';
import { useNavigate } from "react-router-dom";

function Menu(props) {
    const { 
        toggleMenu, 
        isMenuOpen 
    } = props;

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
        <nav className={isMenuOpen ? 'menuBar active' : 'menuBar'} > 
        <div className="menuTitle" >ISS Tracker</div>
            <ul className="menuBarItems" >
                <button
                    onClick={() => {
                        toggleMenu();
                        homeChange();
                    }}
                    className="menuButton" >
                    Home
                </button>
                <button
                    onClick={() => {
                        toggleMenu();
                        issChange();
                    }}
                    className="menuButton" >
                    ISS Map
                </button>  
                <button
                    onClick={() => {
                        toggleMenu();
                        aboutChange();
                    }}
                    className="menuButton" >
                    About
                </button>  
             </ul>
        </nav> 
    )
}

export default Menu;