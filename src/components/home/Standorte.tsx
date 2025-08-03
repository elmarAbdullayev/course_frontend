import React from 'react'
import "../../css/home.css";
import Button from 'react-bootstrap/Button';

 const Standorte: React.FC = () => {
  return (
    <div className='mt-5'>

<h5>DeutschAkademie Sprachschulen in Deutschland und Österreich</h5>

<p className='mt-5'>Alle unsere Sprachschulen befinden sich in bester Lage direkt im Stadtzentrum und sind problemlos zu Fuß oder mit öffentlichen Verkehrsmitteln zu erreichen.</p>

<div className='standOrtParentDiv d-flex justify-content-center  flex-wrap gap-4 mt-5'>

<div className='d-flex flex-column'>
    <img src="https://www.deutschakademie.de/wp-content/uploads/2023/08/deutschkurs-berlin-361x203.jpg" alt="" />
    <a className='fw-bold text-black'>Deutschkurs Berlin</a>
</div>

<div className='d-flex flex-column'>
    <img src="https://www.deutschakademie.de/wp-content/uploads/2023/08/deutschkurs-muenchen-361x203.jpg" alt="" />
    <a className='fw-bold text-black'>Deutschkurs München</a>
</div>

<div className='d-flex flex-column'>
    <img src="https://www.deutschakademie.de/wp-content/uploads/2023/08/deutschkurs-wien-361x203.jpg" alt="" />
    <a className='fw-bold text-black'>Deutschkurs wien</a>
</div>

<div className='d-flex flex-column'>
    <img src="https://www.deutschakademie.de/wp-content/uploads/2023/08/deutschkurs-hamburg-361x203.jpg" alt="" />
    <a className='fw-bold text-black'>Deutschkurs Hamburg</a>
</div>

<div className='d-flex flex-column'>
    <img src="https://www.deutschakademie.de/wp-content/uploads/2023/08/deutschkurs-frankfurt-361x203.jpg" alt="" />
    <a className='fw-bold text-black'>Deutschkurs Frankfurt</a>
</div>

<div className='d-flex flex-column'>
    <img src="https://www.deutschakademie.de/wp-content/uploads/2023/08/deutschkurs-stuttgart-361x203.jpg" alt="" />
    <a className='fw-bold text-black'>Deutschkurs Stuttgart</a>
</div>

<div className='d-flex flex-column'>
    <img src="https://www.deutschakademie.de/wp-content/uploads/2023/08/deutschkurs-koeln-361x203.jpg" alt="" />
    <a className='fw-bold text-black'>Deutschkurs Köln</a>
</div>

<div className='d-flex flex-column'>
    <img src="https://www.deutschakademie.de/wp-content/uploads/2023/08/deutschkurs-leipzig-361x203.jpg" alt="" />
    <a className='fw-bold text-black'>Deutschkurs Leipzig</a>
</div>

<div className='d-flex flex-column'>
    <img src="https://www.deutschakademie.de/wp-content/uploads/2023/10/deutschkurs-duesseldorf-1-361x203.jpg" alt="" />
    <a className='fw-bold text-black'>Deutschkurs Düsseldorf</a>
</div>

<div className='d-flex flex-column'>
    <img src="https://www.deutschakademie.de/wp-content/uploads/2024/10/Ueber-uns-361x203.png" alt="" />
    <a className='fw-bold text-black'>Alle Standorte</a>
</div>


</div>


<div className='text-center mt-5'>
    <p>Nicht in Ihrer Stadt? Entdecken Sie unsere Onlinekurse und lernen Sie flexibel von überall.</p>
      <Button variant="outline-secondary text-black">Onlinekurse ansehen</Button>

</div>



<div className='mt-5 d-flex flex-column gap-5'>

    <h3>Wie finde ich den passenden Deutschkurs?</h3>
    <p>Es gibt viele Möglichkeiten, Deutsch zu lernen. Wenn Sie sich nicht sicher sind, welcher Kurs der richtige für Sie ist, helfen wir Ihnen gerne dabei, die optimale Wahl zu treffen.</p>

<div className='d-flex flex-column gap-3'>

  <h4 className='fw-bold'>1. Welche Kursart passt zu mir?</h4>
    <div><span className='fw-bold'>Intensivkurs:</span> <span>Die richtige Wahl für alle, die so schnell wie möglich Deutsch lernen möchten.</span></div>
    <div><span className='fw-bold'>Semi-Intensivkurs:</span><span> Ideal während Beruf oder Studium oder wenn Sie Deutsch weniger intensiv lernen möchten.</span></div>
    <div><span className='fw-bold'>Wochenendkurs:</span><span> Optimal, wenn Sie unter der Woche keine oder nur wenig Zeit haben.</span></div>
    <div><span className='fw-bold'>Kostenloser Deutschkurs:</span><span>Eine großartige Ergänzung zu anderen Kursen - bestens geeignet, um ein erstes Gefühl für die Sprache zu bekommen oder um zu üben.</span></div>
</div>

<div  className='d-flex flex-column gap-3'>

      <h4 className='fw-bold'>2. Welche Kursform passt zu mir?</h4>
    <div><span className='fw-bold'>Präsenzunterricht:</span><span> Für alle, die gerne direkt im Klassenzimmer mit menschlichem Kontakt lernen.</span></div>
    <div><span className='fw-bold'>Onlinekurs:</span><span>Für alle, die lieber in den eigenen vier Wänden unterrichtet werden.</span></div>

</div>
  
</div>

        

    </div>
  )
}


export default Standorte;
