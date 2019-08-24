import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Passenger from '../passengers/Passengers'

class Suspicious extends Component {
	render() {
		return (
			<div>
				<Card>
					<Card.Body>
						<Table responsive>
							<tbody>
								{this.props.passengers.map((passenger, index) => {
									if (passenger.suspicious === true){
	                 	return <tr key={passenger.id}>
											<td className="col-md-10">{passenger.name}</td>
											<td className="col-md-10">{passenger.national_id}</td>
											<td className="col-md-10">{passenger.gender}</td>
										</tr>
									}
								})}
							</tbody>
						</Table>
					</Card.Body>
				</Card>
			</div>
		)
	}
}

export default Suspicious;