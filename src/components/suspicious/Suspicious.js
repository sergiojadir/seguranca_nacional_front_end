import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List'
   
class Passenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passengers: []
    }
    this.loadPassengers = this.loadPassengers.bind(this);
  }

  async loadPassengers() {
    let response = await fetch('http://localhost:3001/passengers');
    const passengers = await response.json();
    this.setState({passengers: passengers});
  }

  componentDidMount() {
    this.loadPassengers();
  }

  render() {
    return (
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">Suspicious</p>
          <List loadTasks={this.loadPassengers} passengers={this.state.passengers}/>
        </Col>
      </Row>
    );
  }
}

export default Passenger;