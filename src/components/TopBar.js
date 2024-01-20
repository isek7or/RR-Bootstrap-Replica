import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import '../App.css'
import Container from 'react-bootstrap/Container';

export default function TopBar() {
  return (
    <Container className="sticky">
      <Navbar style={{ width: "130%" }} bg="light" expand="lg" >
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="instacart logo" />
        </Navbar.Brand>
        <Form>
          <Form.Control size="lg" style={{ width: "1200px", margin: "20px" }} type="search-bar" placeholder="Search products and stores" />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#LogIn"><b>Log In</b></Nav.Link>
            <Button variant="success" style={{fontSize: "18px"}}>Sign Up</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
