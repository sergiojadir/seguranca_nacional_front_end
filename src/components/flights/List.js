import React, { Component } from 'react';
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {
	async deleteTicket(filght) {
     if (window.confirm(`Are you sure you want to delete: "${filght.id}"`)) {
       await fetch(`http://localhost:3001/filghts/${filght.id}`, {method: 'DELETE'});
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
								{this.props.filghts.map((filght, index) => {
									return <tr key={filght.id}>
										<td className="col-md-10">{filght.number}</td>
										<td className="col-md-10">{filght.origin.nome}</td>
										<td className="col-md-10">{filght.destination.nome}</td>
										<td className="col-md-10">{filght.departure_time_to_s}</td>
										<td className="col-md-10">{filght.arrival_time_to_s}</td>
										
                    <td>
                      <a className="delete" href="#" onClick={() => this.deleteTicket(filght)}>
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