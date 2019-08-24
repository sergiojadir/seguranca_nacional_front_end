import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List'
import Create from './Create'
// import Button from 'react-bootstrap/Button'
   
class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filghts: []
    }
    this.loadFlights = this.loadFlights.bind(this);
  }

  async loadFlights() {
    let response = await fetch('http://localhost:3001/flights');
    const filghts = await response.json();
    this.setState({filghts: filghts});
  }

  componentDidMount() {
    this.loadFlights();
  }

  render() {
    return (
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">Flights</p>
          <List loadTasks={this.loadFlights} filghts={this.state.filghts}/>
          <Create loadFlights={this.loadFlights} />
        </Col>
      </Row>
    );
  }
}

export default Flights;