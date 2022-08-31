import '../styles/Cards.css'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate} from 'react-router-dom';



function Cards(){
  const navigate = useNavigate();
 
  const navigateToCrew = () =>{
    navigate('/crew')
  }
  const navigateToVideos = () =>{
    navigate('/videos')
  }
return(
   <div className='card-container' >
     <div className='card-one'>
      <img className="card-image" src ="card1.png" alt=""/> 
          <div className='card-body'>
            <h5 className='card-title'>The Crew</h5>
               <p className='card-text'>Meet the team that is the Sunday Wake Crew</p>
                  <button className='card-btn' onClick={navigateToCrew}>Crew</button>
                </div>
              </div>
               <div className='card-two'>
                    <img className="card-image" src ="card2.png" alt="video card"/>
                      <div className='card-body'>
                          <h5 className='card-title'>Videos</h5>
                              <button className='card-btn' onClick={navigateToVideos} >Watch Now</button>
                         </div>
                     </div> 
                  </div>
 )
    
}



export default Cards;
