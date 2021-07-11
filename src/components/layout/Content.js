import { Col, Row, Nav } from "react-bootstrap";
import './layout.css';

function Content() {
  return (
    <Row>
      <Col xs={3}>
        <Nav className="navbar">
          <ul className="navbar-nav" >
            <li className="nav-item">
              <a href="#"> List Members</a>
            </li>
            <li className="nav-item">
              <a href="#"> Create Member</a>
            </li>
            <li className="nav-item">
              <a href="#"> Update Member</a>
            </li>
            <li className="nav-item">
              <a href="#"> Delete Member </a>
            </li>
          </ul>
        </Nav>
      </Col>
      <Col>
        <p>Content goes here</p>
      </Col>
    </Row>
  );
}

export default Content;
