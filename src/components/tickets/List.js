import React, { Component } from 'react';
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {
	async deleteTicket(ticket) {
     if (window.confirm(`Are you sure you want to delete: "${ticket.id}"`)) {
       await fetch(`http://localhost:3001/tickets/${ticket.id}`, {method: 'DELETE'});
       this.props.loadTasks();
     }
   }

	render() {
		return (
			<div>
				<Card>
					<Card.Body>
						<Table responsive>
							<tbody>
								{this.props.tickets.map((ticket, index) => {
									return <tr key={ticket.id}>
										<td className="col-md-10">{ticket.passenger.name}</td>
										<td className="col-md-10">{ticket.passenger.national_id}</td>
										<td className="col-md-10">{ticket.origin}</td>
										<td className="col-md-10">{ticket.seat_number}</td>
										<td>
                      { 
                        <a className="check" href="#">
                          <FontAwesomeIcon icon="check-circle"/>
                        </a>
                      }
                    </td>
                    <td>
                      <a className="delete" href="#" onClick={() => this.deleteTicket(ticket)}>
                        <FontAwesomeIcon icon="trash-alt"/>
                      </a>
                    </td>
									</tr>
								})}
							</tbody>
						</Table>
					</Card.Body>
				</Card>
			</div>
		)
	}
}

export default List;