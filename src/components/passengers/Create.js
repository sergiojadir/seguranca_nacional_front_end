import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

function Create(props) {
	const [name, setName] = useState('');
	const [national_id, setNationalId] = useState('');
	const [gender, setGender] = useState('');
	const [showErrorMessage, setErrorMessage] = useState('');
	const [show, setShow] = useState('');

	const handleSubmit = (async () => {
		let response = await fetch('http://localhost:3001/passengers',
			{
				method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        },
				body: JSON.stringify({
					passenger: {
						name: name,
						national_id: national_id,
						gender: gender
					}
				})
			}
		)
		if ( response.status === 201 ) {
			setShow(false);
			setErrorMessage(false);
			setName('');
			props.loadPassengers();
		} else {
			setErrorMessage(true);
		};
	})

	return (
		<div>
			<Button onClick={e => setShow(true)} variant="dark" className="float-right create_passenger_btn">+ Passenger</Button>

			<Modal show={show || false} onHide={e => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>New Passenger</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Alert variant={'danger'} show={showErrorMessage || false}>
				    This is a alert—check it out!
				  </Alert>
					<Form.Control type="text" placeholder="Enter with passenger name..." value={name || ''} onChange={e => setName(e.target.value)} />
					<br />
					<Form.Control type="text" placeholder="Enter with passenger national ID..." value={national_id || ''} onChange={e => setNationalId(e.target.value)} />
					<br />
					<Form.Control type="text" placeholder="Enter with passenger Gender..." value={gender || ''} onChange={e => setGender(e.target.value)} />
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