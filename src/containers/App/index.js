//import HomePage from '../HomePage/index.js';
//import ISSPage from '../ISSPage/index.js';
import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
//import Menu from '../../components/Menu/index.js';
import Header from '../../components/Header';
//import styled from 'styled-components';
//import PropTypes from 'prop-types';

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
        /* <Menu toggleMenu={() => this.ToggleSideMenu()} isMenuOpen={this.state.isMenuOpen} /> */
        //<HomeWrapper>
        <div>
          <Header toggleMenu={() => this.ToggleSideMenu()} isMenuOpen={this.state.isMenuOpen} /> 
           {/* <Switch > */}
             {/* <Route exact path="/" render={(props) => <HomePage isMenuOpen={this.state.isMenuOpen} />} /> */}
            {/* <Route exact path="/iss" render={(props) => <ISSPage isMenuOpen={this.state.isMenuOpen} />} />  */}
           {/* </Switch>  */}
          <div>Hello</div>
          </div>
        /* </HomeWrapper>
      </AppWrapper>  */
    );
  }
};

// App.propTypes = {
//   ToggleSideMenu: PropTypes.func,
//   isMenuOpen: PropTypes.bool,
// };

export default App;