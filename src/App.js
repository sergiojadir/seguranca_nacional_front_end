import React from 'react';
import Container from 'react-bootstrap/Container'

import logo from './logo.svg';
import './App.scss';
import Tickets from './components/Tickets';
import Header from './components/Header';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckCircle, faTrashAlt)

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Tickets/>
      </Container>
    </div>
  );
}

export default App;
