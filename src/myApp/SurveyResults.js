import React, { Component } from 'react';
import './SurveyResults.css';


class SurveyResults extends Component {

  constructor (props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://techtestbackend.azurewebsites.net/api/surveys')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render () {
    const data = this.state.data;
    var dataList;
    
    if (data.length > 0) {
      dataList = data.map((row, index) => {
        return(
          <tr>
            <td>{row.id}</td>
            <td>{row.quality}</td>
            <td>{row.expertise}</td>
            <td>{row.culture}</td>
            <td>{row.average}</td>
          </tr>
        )
      });
    }

    return (
      <div className="main-container">
        <div className="content">
          <h2>Customer Survey List</h2>
          <table>
            <tbody>
              <tr>
                <th>#</th>
                <th>Quality</th>
                <th>Expertise</th>
                <th>Culture</th>
                <th>Average</th>
            </tr>
            {dataList}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default SurveyResults;