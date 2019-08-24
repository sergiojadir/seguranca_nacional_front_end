import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List'
   
class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: []
    }
    this.loadTickets = this.loadTickets.bind(this);
  }

  async loadTickets() {
    let response = await fetch('https://segurancanacional.herokuapp.com/tickets');
    const tickets = await response.json();
    console.log(tickets);
    this.setState({tickets: tickets});
  }

  componentDidMount() {
    this.loadTickets();
  }

  render() {
    console.log(this.state.tickets);
    return (
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">Tickets</p>
          <List loadTasks={this.loadTickets} tickets={this.state.tickets}/>
        </Col>
      </Row>
    );
  }
}

export default Tickets;