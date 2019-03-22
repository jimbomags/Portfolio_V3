import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import HomePage from './HomePage';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.navBar.portfolio === 'green_underline') {
      document.querySelector('#portfolio-container').scrollIntoView();
    }
  }
  render() {
    return (
      <div>
        <header>
          <Navbar />
          <HomePage />
        </header>
        <main>
          <Portfolio />
          <Contact />

        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navBar: state.navBar,
});

export default connect(mapStateToProps, null)(Home);
