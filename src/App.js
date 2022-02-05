import React from "react";
import { Link } from "react-router-dom";
import { NavItem, NavLink, Nav, Row, Col } from "reactstrap";
import "./style.css";

function App() {
  return (
    <div>
      <Row style={{ alignItems: "center" }}>
        <Col md='5'>
          <h1 className="logo">Labaratoriya</h1>
        </Col>
        <Col md="7">
          <Nav>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/show">Users show</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Sign In</NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
      <hr />
      {/* <BrowserRouter> */}

      {/* </BrowserRouter> */}
    </div>
  );
}
export default App;
