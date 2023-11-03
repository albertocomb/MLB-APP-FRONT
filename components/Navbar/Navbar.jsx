import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Importa Link desde React Router
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/mlb.svg';
import './Navbar.css';

function Navigator() {
    return (
        <>
            <Navbar className='bg' data-bs-theme="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-left"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/News">NEWS</Nav.Link>
                        <Nav.Link as={Link} to="/Scores">SCORES</Nav.Link>
                        <Nav.Link as={Link} to="/Players">PLAYERS</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigator;
