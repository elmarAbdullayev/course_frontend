import React from "react";
import "../../css/home.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const BelibterKurse: React.FC = () => {
  const [intensiveKurs, setIntensiveKurs] = React.useState<boolean>(false);
  const [semiIntensiveKurs, setSemiIntensiveKurs] = React.useState<boolean>(false);

  return (
    <div>
      <h3 className="mt-5">Unsere beliebtesten Kurse</h3>

      <div className="parentDiv row mt-5 d-flex justify-content-center align-items-start gap-5">
        {/* Erster Kurs */}
        <div className="col-5 d-flex flex-column gap-3">
          <img
            src="https://www.deutschakademie.de/wp-content/uploads/2024/12/Deutsch-Intensivkurse.jpg"
            alt=""
          />
          <h2>Deutsch Intensivkurs</h2>

          <p>Für alle, die Deutsch so schnell wie möglich lernen möchten.</p>

          <ul className="d-flex flex-column gap-3">
            <li>Online und vor Ort buchbar</li>
            <li>Montag bis Donnerstag</li>
            <li>3h pro Tag</li>
            <li>8:30 | 11:45 | 15:00 | 18:15 Uhr (MESZ)</li>
            <li>4 Wochen</li>
          </ul>

          <div className="intensivkursfinder mt-5 d-flex justify-content-between align-items-center" onClick={() => setIntensiveKurs(!intensiveKurs)}>
            <h4  className="text-black fs-3 fw-bold">Intensivkurs finden</h4>
                {
                intensiveKurs ? <FaMinus className="fs-3"/> : <FaPlus className="fs-3"/>
            }
          </div>

          {intensiveKurs && (
            <div className="mt-3 d-flex flex-column gap-2">
              <ul  className="d-flex flex-column gap-3">
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Online Intensivkurs</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Intensivkurs Berlin</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Intensivkurs Hamburg</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Intensivkurs München</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Intensivkurs Wien</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Intensivkurs Frankfurt</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Intensivkurs Stuttgart</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Intensivkurs Köln</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Intensivkurs Leipzig</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Zweiter Kurs */}
        <div className="col-5 d-flex flex-column gap-3">
          <img
            src="https://www.deutschakademie.de/wp-content/uploads/2024/12/Deutsch-Semi-Intensivkurse-1024x347.png"
            alt=""
          />
          <h2>Deutsch Semi-Intensivkurs</h2>

          <p>Ideal während dem Beruf oder Studium.</p>

          <ul className="d-flex flex-column gap-3">
            <li>Online und vor Ort buchbar</li>
            <li>Montag & Mittwoch oder Dienstag & Donnerstag</li>
            <li>3h pro Tag</li>
            <li>8:30 | 11:45 | 15:00 | 18:15 Uhr (MESZ)</li>
            <li>8 Wochen</li>
          </ul>

          <div className="semiintensivkursfinder mt-5 d-flex justify-content-between align-items-center" onClick={() => setSemiIntensiveKurs(!semiIntensiveKurs)}>
            <h4  className="text-black fs-3 fw-bold">Semi-Intensivkurs finden</h4>
            {
                semiIntensiveKurs ? <FaMinus className="fs-3"/> : <FaPlus className="fs-3"/>
            }
          </div>
          {semiIntensiveKurs && (
            <div className="mt-3 d-flex flex-column gap-2">
              <ul  className="d-flex flex-column gap-3">
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Online Semi-Intensivkurs</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Semi-Intensivkurs Berlin</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Semi-Intensivkurs Hamburg</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Semi-Intensivkurs München</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Semi-Intensivkurs Wien</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Semi-Intensivkurs Frankfurt</a>
                </li>
                <li>
                  <a className="text-black fs-5 fw-bold" href="">Semi-Intensivkurs Köln</a>
                </li>

              </ul>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default BelibterKurse;
