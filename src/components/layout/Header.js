import { Col, Nav, Row } from "react-bootstrap";

function Header() {
  let style = {
    header: {
      color: "green",
    },
  };
  return (
    <Row>
      <Col>
        <h4 style={style.header}>Manager Members with React</h4>
      </Col>
      <Col>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Tutorials</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">More.</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
}

export default Header;
