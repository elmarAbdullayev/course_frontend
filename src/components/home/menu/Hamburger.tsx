import React from "react";
import { IoExit, IoClose } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneLike } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import "../../../css/home_menu.css";

const Hamburger: React.FC = () => {
  const [check, setCheck] = React.useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, s: string) => {
    setCheck(s);
  };

  return (
    <div className="container fs-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center gap-4">
          <IoExit />
          <h3>Einloggen</h3>
        </div>
        <IoClose />
      </div>

      <hr />

      <div className="d-flex container ">
        <div className="row w-100 subContainerHambuger">

          {/* Left Menu */}
          <div className="col-md-4">
            <ul className="list-unstyled d-flex flex-column gap-4 fs-4">
              <li className="d-flex justify-content-between align-items-center w-100" onClick={(e) => handleClick(e, "deutschkurse")}>
                <div className="d-flex align-items-center gap-3">
                  <TbBooks />
                  <span>Deutschkurse</span>
                </div>
                <FiChevronRight />
              </li>

              <li className="d-flex justify-content-between align-items-center w-100" onClick={(e) => handleClick(e, "telcPrüfung")}>
                <div className="d-flex align-items-center gap-3">
                  <PiStudentDuotone />
                  <span>telc Prüfung</span>
                </div>
                <FiChevronRight />
              </li>

              <li className="d-flex justify-content-between align-items-center w-100" onClick={(e) => handleClick(e, "vorteile")}>
                <div className="d-flex align-items-center gap-3">
                  <AiTwotoneLike />
                  <span>Vorteile</span>
                </div>
                <FiChevronRight />
              </li>

              <li className="d-flex align-items-center gap-3 w-100" onClick={(e) => handleClick(e, "kursbuchen")}>
                <FaPencilAlt />
                <span>Kurs buchen</span>
              </li>

              <li className="d-flex justify-content-between align-items-center w-100" onClick={(e) => handleClick(e, "standorte")}>
                <div className="d-flex align-items-center gap-3">
                  <CiLocationOn />
                  <span>Standorte</span>
                </div>
                <FiChevronRight />
              </li>
            </ul>
          </div>

          {/* Middle Content */}
          <div className="col-md-4">
            {check === "deutschkurse" && (
              <ul className="list-unstyled d-flex flex-column gap-4 fs-4">

          <li className="d-flex justify-content-between align-items-center w-100" onClick={(e) => handleClick(e, "deutschkurse")}>
                <div className="d-flex align-items-center gap-3">
                  <span>Übersicht (alle Kurse)</span>
                </div>
                <FiChevronRight />
              </li>
          <li className="d-flex justify-content-between align-items-center w-100" onClick={(e) => handleClick(e, "deutschkurse")}>
                <div className="d-flex align-items-center gap-3">
                  <span>Online Kurse</span>
                </div>
                <FiChevronRight />
              </li>


          <li className="d-flex justify-content-between align-items-center w-100" onClick={(e) => handleClick(e, "deutschkurse")}>
                <div className="d-flex align-items-center gap-3">
                  <span>Präsens Kurse</span>
                </div>
                <FiChevronRight />
              </li>

                
                <li>Termine</li>
<li>Kostenlos Deutsch lernen</li>

              </ul>
            )}

            {check === "telcPrüfung" && (
              <ul className="list-unstyled d-flex flex-column gap-4 fs-4">
                <li>Anmeldung telc</li>
                <li>Über telc</li>
                <li>telc B1 Prüfung</li>
                <li>telc B2 Prüfung</li>
                <li>B2 Prüfungsvorbereitung telc</li>
              </ul>
            )}

            {check === "vorteile" && (
              <ul className="list-unstyled d-flex flex-column gap-4 fs-4">
                <li>Genaue Einstufung</li>
                <li>Geld-zurück Garantie</li>
                <li>Kostenlose Lernbetreuung</li>
                <li>Alle Vorteile auf einen Blick</li>
              </ul>
            )}

            {check === "kursbuchen" && <div>Kurs buchen</div>}

            {check === "standorte" && (
              <ul className="list-unstyled d-flex flex-column gap-4 fs-4">
                <li>Hamburg</li>
                <li>Berlin</li>
                <li>München</li>
                <li>Frankfurt</li>
              </ul>
            )}
          </div>

          {/* Right Partner Section */}
          <div className="col-md-4">
            <div className="d-flex flex-column gap-4 fs-4">
              <h3>Unsere Partner</h3>
              <ul className="list-unstyled d-flex flex-column gap-4">
                <li>Partner 1</li>
                <li>Partner 2</li>
                <li>Partner 3</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <hr />

      {/* Footer */}
      <div className="mt-5">
        <ul className="list-unstyled d-flex justify-content-between align-items-center w-100 fs-4">
          <li>Kontakt</li>
          <li>Impressum</li>
          <li>Datenschutz</li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
