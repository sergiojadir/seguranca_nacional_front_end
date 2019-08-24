import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

function Create(props) {
	const [number, setNumber] = useState('');
	const [originId, setOriginId] = useState('');
	const [destinationId, setDestinationId] = useState('');
	const [departureTime, setDepartureTime] = useState('');
	const [arrivalTime, setArrivalTime] = useState('');
	const [showErrorMessage, setErrorMessage] = useState('');
	const [show, setShow] = useState('');

	const handleSubmit = (async () => {
		let response = await fetch('https://segurancanacional.herokuapp.com/flights',
			{
				method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        },
				body: JSON.stringify({
					passenger: {
						number: number,
						origin_id: originId,
						destination_id: destinationId,
						departure_time: departureTime,
						arrival_time: arrivalTime
					}
				})
			}
		)
		if ( response.status === 201 ) {
			setShow(false);
			setErrorMessage(false);
			setNumber('');
			props.loadFlights();
		} else {
			setErrorMessage(true);
		};
	})

	return (
		<div>
			<Button onClick={e => setShow(true)} variant="dark" className="float-right create_passenger_btn">+ Flights</Button>

			<Modal show={show || false} onHide={e => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>New Flight</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Alert variant={'danger'} show={showErrorMessage || false}>
				    This is a alert—check it out!
				  </Alert>
					<Form.Control type="text" placeholder="Enter with flight number..." value={number || ''} onChange={e => setNumber(e.target.value)} />
					<br />
					<Form.Control type="text" placeholder="Enter with flight origin..." value={originId || ''} onChange={e => setOriginId(e.target.value)} />
					<br />
					<Form.Control type="text" placeholder="Enter with flight destination..." value={destinationId || ''} onChange={e => setDestinationId(e.target.value)} />
					<br />
					<Form.Control type="text" placeholder="Enter with flight departure time..." value={departureTime || ''} onChange={e => setDepartureTime(e.target.value)} />
					<br />
					<Form.Control type="text" placeholder="Enter with flight arrival time..." value={arrivalTime || ''} onChange={e => setArrivalTime(e.target.value)} />
				</Modal.Body>
				<Modal.Footer>
					<Button>
						Close
					</Button>
					<form>
						<Button variant="dark" type="submit" onClick={handleSubmit}>
							Create
						</Button>
					</form>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default Create;