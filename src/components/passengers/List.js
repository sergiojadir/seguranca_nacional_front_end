import React, { Component } from 'react';
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {
	async deleteTicket(passenger) {
     if (window.confirm(`Are you sure you want to delete: "${passenger.id}"`)) {
       await fetch(`http://localhost:3001/passengers/${passenger.id}`, {method: 'DELETE'});
       this.props.loadPassengers();
     }
   }

	render() {
		return (
			<div>
				<Card>
					<Card.Body>
						<Table responsive>
							<tbody>
								{this.props.passengers.map((passenger, index) => {
									return <tr key={passenger.id}>
										<td className="col-md-10">{passenger.name}</td>
										<td className="col-md-10">{passenger.national_id}</td>
										<td className="col-md-10">{passenger.gender}</td>
										
                    <td>
                      <a className="delete" href="#" onClick={() => this.deleteTicket(passenger)}>
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