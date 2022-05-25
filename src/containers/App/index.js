import HomePage from '../HomePage';
import ISSPage from '../ISSPage';
import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
//import styled from 'styled-components';
import PropTypes from 'prop-types';

// const AppWrapper = styled.div`
//   display: flex;
//   min-height: 100vh;
//   flex-direction: row;
//   background-color: white;
//   border: 1px solid #dddfe2;
//   border-radius: 4px;
// `;

// const HomeWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   min-height: 100%;
//   left: props => props.isMenuOpen ? 350 : 0;
// `;

class App extends Component {
  constructor(props){
    super(props);
    this.ToggleSideMenu = this.ToggleSideMenu.bind(this);
    this.state = {
      isMenuOpen: false,
    }
  };

  ToggleSideMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    return (
      //<AppWrapper>
      <div>
        <Menu toggleMenu={() => this.ToggleSideMenu()} isMenuOpen={this.state.isMenuOpen} /> 
        {/* <HomeWrapper> */}
        
          <Header toggleMenu={() => this.ToggleSideMenu()} isMenuOpen={this.state.isMenuOpen} /> 
          
           <Routes>
                <Route exact path="/" element={ <HomePage /> } /> 
                <Route exact path="/iss" element={ <ISSPage /> } />
            </Routes>
          </div>
        /* </HomeWrapper>
      </AppWrapper>  */
    );
  }
};

App.propTypes = {
  ToggleSideMenu: PropTypes.func,
  isMenuOpen: PropTypes.bool,
};

export default App;