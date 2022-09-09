import {Nav} from "react-bootstrap"
import { Link } from "react-router-dom"

// import NavBar from "react-bootstrap"



function NavBar(){

    return(
         <nav className="navbar">
          <div className="logo-container">
           <a className="navbar-brand" href="/admin">
            <img src="Logo1.png" width="50" height="50" className="d-inline-block align-top" alt="page title" />
                <p className="logo-text">Sunday Wake Crew</p>
          </a>
          </div>
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