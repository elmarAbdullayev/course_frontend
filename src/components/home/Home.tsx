import React from 'react'
import { Link } from 'react-router-dom';
import "../../css/home.css";

const Home: React.FC = () => {


  return <div>


      <div className="HomeContainer d-flex">

        <div>
        <h1>Deutsch lernen</h1>
        <h5>mit Geld-zurück-Garantie</h5>
        <hr />
       <Link to={"/"}><i>Deutschkurs buchen</i></Link> 
        </div>
        <img src="https://pngteam.com/images/happy-person-png-1261x883_e6a99ff9_transparent_202ff8.png.png" alt="" />
      </div>

   <div className='container mt-5'>
    <p>Vertrauen Sie auf unsere Erfahrung: über <strong>4.500 5-Sterne Bewertungen</strong> und mehr als <strong>20.000 Teilnehmende</strong>  pro Jahr! Ob online, in Präsenz oder kostenlos – bei uns finden Sie genau den Kurs, der zu Ihnen passt.</p>
  
      <div className='d-flex justify-content-center align-items-center flex-wrap gap-5 mt-5 smallPictures'>
          <img src="https://www.deutschakademie.de/wp-content/uploads/2024/12/Google-Bewertungen.png" alt="" />
          <img src="https://www.deutschakademie.de/wp-content/uploads/2024/12/ProvenExpert.png" alt="" />
          <img src="https://www.deutschakademie.de/wp-content/uploads/2024/12/20-Jahre-Erfahrung-1.png" alt="" />
      </div>
   </div>


    </div>
};


export default Home;