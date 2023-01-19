import HomePage from '../HomePage';
import ISSPage from '../ISSPage';
import About from '../About';
import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Menu from '../../components/Menu';
import Header from '../../components/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.ToggleSideMenu = this.ToggleSideMenu.bind(this);
    this.ToggleFaqQuestions = this.ToggleFaqQuestions.bind(this);
    this.state = {
      isMenuOpen: false,
      isFaqOpen: false,
      faqId: 0
    }
  };

  ToggleSideMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  };

  ToggleFaqQuestions(id) {
    this.setState({ isFaqOpen: !this.state.isFaqOpen, faqId: id })
  };

  render() {
    return (
        <div>
            <Menu toggleMenu={() => this.ToggleSideMenu()} isMenuOpen={this.state.isMenuOpen} /> 
            <Header toggleMenu={() => this.ToggleSideMenu()} isMenuOpen={this.state.isMenuOpen} /> 
            <Routes>
                <Route exact path="/" element={ <HomePage /> } /> 
                <Route exact path="/iss" element={ <ISSPage /> } />
                <Route exact path="/about" element={ <About toggleFaq={(id) => this.ToggleFaqQuestions(id)} isFaqOpen={this.state.isFaqOpen} faqId={this.state.faqId} /> } />
            </Routes>
        </div>
    );
  }
};

export default App;