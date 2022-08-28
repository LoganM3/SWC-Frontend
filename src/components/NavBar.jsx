
import 'bootstrap/dist/css/bootstrap.css'


function NavBar(){

    return(
        <>
         <ul className='nav-item'>
                <li class="nav-home">
                     <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-crew">
                     <a class="nav-link active" href="#">The Crew</a>
                </li>
                <li class="nav-videoss">
                     <a class="nav-link active" href="#">Videos</a>
                </li>
        </ul>
        </>
    )
}

export default NavBar