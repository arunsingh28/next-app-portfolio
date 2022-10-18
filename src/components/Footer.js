import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/github/GitHub-Mark-Light-32px.png'
import BrandLogo from '../assets/img/BrandLogo.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={BrandLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{ 'marginTop': '20px' }}>
              <a href="https://www.linkedin.com/in/arunsingh28/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.github.com/arunsingh28"><img src={navIcon4} alt="Icon" /></a>
              <a href="http://www.instagram.com/arun.singh28"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright {new Date().getFullYear()}. Made with ❤️ with React</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
