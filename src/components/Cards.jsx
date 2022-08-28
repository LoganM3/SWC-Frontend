import '../styles/Cards.css'
import "bootstrap/dist/css/bootstrap.css";


function Cards(){
return(
   <div className='card-container' >
     <div className='card-one'>
      <img className="card-image" src ="adf.jpeg" alt=""/> 
          <div className='card-body'>
            <h5 className='card-title'>The Crew</h5>
               <p className='card-text'>Meet the team that is the Sunday Wake Crew</p>
                  <button className='card-btn' >Crew</button>
                </div>
              </div>
               <div className='card-two'>
                    <img className="card-image" src ="adf.jpeg" alt=""/>
                      <div className='card-body'>
                          <h5 className='card-title'>Videos</h5>
                              <button className='card-btn' >Watch Now</button>
                         </div>
                     </div> 
                  </div>
 )
    
}



export default Cards;
// return (
//         <div className="card" style="width: 18rem;">
//         <img src="https://google.com" className="card-img-top" alt="...">
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
//   </div>
  
 //   )
