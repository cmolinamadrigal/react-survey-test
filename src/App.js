import React, { Component } from 'react';
import './App.css';
import Survey from './myApp/Survey.js';
import SurveyResults from './myApp/SurveyResults.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-header">
          <h2 className="header-title">Customer Survey</h2>
        </div>
        <Survey />

        <SurveyResults />
      </div>
    );
  }
}

export default App;