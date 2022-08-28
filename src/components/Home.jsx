import Hero from "./Hero";
import NavBar from "./NavBar";
import '../styles/Home.css'
import Cards from "./Cards";



function Home(){

    return(
        
    <div className="home-body">
        <header><NavBar/></header>
            <Hero/>
         <div><Cards/> </div>  
         </div>
    
            
       
    )
}



export default Home