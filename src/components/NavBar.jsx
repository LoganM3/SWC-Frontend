import {Button, Nav} from "react-bootstrap"
import { Link } from "react-router-dom"
// import NavBar from "react-bootstrap"



function NavBar(){

    return(
         <nav class="navbar navbar-light bg-light">
           <a class="navbar-brand" href="#">
            <img src="/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
                Sunday Wake Crew
          </a>
          <Nav activeKey="/home">
      <Nav.Item>
       <Nav.Link as={Link} to='/'>
        Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
       <Nav.Link as={Link} to='/theCrew'>
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
         
         
         
         
         
         
         
         
         {/* <ul className='nav-item'>
                <li class="nav-home">
                     <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-crew">
                     <a class="nav-link active" href="#">The Crew</a>
                </li>
                <li class="nav-videoss">
                     <a class="nav-link active" href="#">Videos</a>
                </li>
        </ul> */}
        {/* </>
    )
} */}

export default NavBar