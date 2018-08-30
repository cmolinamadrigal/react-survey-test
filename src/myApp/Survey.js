import React, { Component } from 'react';
import './Survey.css';


class Survey extends Component {

  constructor (props) {
    super(props);
    this.state = {
      values: ['1','2','3','4','5'],
      qualitySelected: null,
      expertiseSelected: null,
      cultureSelected: null,
      comments: null
    }
  }

  handleUserInput (e) {
    const value = e.target.value;
    const name = e.target.name;
    
    switch(name) {
      case 'quality':
          this.setState({qualitySelected: value});
          break;
      case 'expertise':
          this.setState({expertiseSelected: value});
          break;
      case 'culture':
          this.setState({cultureSelected: value});
          break;
      case 'comments':
          this.setState({comments: value});
          break;
      default:
          break;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var data = {
       "quality": this.state.qualitySelected,
       "expertise": this.state.expertiseSelected,
       "culture": this.state.cultureSelected,
       "comments": this.state.comments
    }

    fetch('http://techtestbackend.azurewebsites.net/api/surveys', {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      // return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }

  render () {
    const values = this.state.values;
    const qualityList = values.map((value, index) =>
      <input type='radio' name='quality' value={value} key={index} onClick={(event) => this.handleUserInput(event)} />
    );
    const expertiseList = values.map((value, index) =>
      <input type='radio' name='expertise' value={value} key={index} onClick={(event) => this.handleUserInput(event)} />
    );
    const cultureList = values.map((value, index) =>
      <input type='radio' name='culture' value={value} key={index} onClick={(event) => this.handleUserInput(event)} />
    );
    const valuesNumbers = values.map((value, index) =>
      <li key={index}>{value}</li>
    );

    return (
      <div className="main-container">
        <div className="content">

          <h1>How would you rate us?</h1>
          <ul>
            {valuesNumbers}
          </ul>
          <div className="question">
            <span>Quality</span>
            {qualityList}
          </div>
          <div className="question">
            <span>Expertise</span>
            {expertiseList}
          </div>
          <div className="question">
            <span>Culture</span>
            {cultureList}
          </div>
          <div className="question">
            <span>Comments</span> <textarea name="comments" value={this.state.comments} onChange={(event) => this.handleUserInput(event)}></textarea>
          </div>
          <button className="submit" type="submit" name="submit" onClick={this.handleSubmit}>Send!</button>
        </div>
      </div>
    )
  }
}
export default Survey;