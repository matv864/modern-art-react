
import {Container, Row, Col} from 'react-bootstrap';
/*import { NavLink } from "react-router-dom";*/

function NavBar() {
  return (
      <span className='border-bottom border-dark'>
        <Container fluid>
          <Row>
            <Col className='.col-6 .col-md-4'>
              ---
            </Col>
            <Col className='.col-6 .col-md-4'>
                <h1 className='text-center'>OK</h1>
            </Col>
            <Col className='.col-6 .col-md-4'>
              ---
            </Col>
          </Row>
        </Container>
      </span>
  );
}

export default NavBar;