import {Nav} from "react-bootstrap"
import { Link } from "react-router-dom"

// import NavBar from "react-bootstrap"



function NavBar(){

    return(
         <nav className="navbar">
           <a className="navbar-brand" href="#">
            <img src="Logo1.png" width="30" height="30" className="d-inline-block align-top" alt="page title" />
                Sunday Wake Crew
          </a>
          <Nav activeKey="/home">
      <Nav.Item>
       <Nav.Link as={Link} to='/'>
        Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
       <Nav.Link as={Link} to='/crew'>
        The Crew
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
       <Nav.Link as={Link} to='/videos'>
        Videos
        </Nav.Link>
      </Nav.Item>
     
      
      
    </Nav>

      </nav>
)
}
         


export default NavBar