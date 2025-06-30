import React from "react";
import { IoExit } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneLike } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import "../../../css/home_menu.css";
import { Container, Row, Col } from 'react-bootstrap';

const Hambuger: React.FC = () => {

    const [check, setCheck] = React.useState<string>("");


    const handelClick = (e:React.MouseEvent<HTMLLIElement>,s:string) => {
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

      <div>

        {/* first part */}

        <div>
  <ul className="list-unstyled d-flex flex-column gap-5 fs-4 align-items-around parentUl">

          <li className="d-flex justify-content-between align-items-center w-25" onClick={(e)=> handelClick(e,"deutschkurse")}>
            <div className="d-flex align-items-center gap-3">
              <TbBooks className="fs-4" />
              <span>Deutschkurse</span>
            </div>
            <FiChevronRight className="fs-4" />
          </li>

          <li className="d-flex align-items-center gap-3 justify-content-between w-25"  onClick={(e)=> handelClick(e,"telcPrüfung")}>
            <div className="d-flex align-items-center gap-3">
              <PiStudentDuotone className="fs-4" />
              <span>telc Prüfung</span>
            </div>
            <FiChevronRight className="ms-5" />
          </li>

          <li className="d-flex align-items-center gap-3 justify-content-between w-25"   onClick={(e)=> handelClick(e,"vorteile")}>
            <div className="d-flex align-items-center gap-3">
              <AiTwotoneLike className="fs-4" />
              <span>Vorteile</span>
            </div>
            <FiChevronRight className="ms-5" />
          </li>

          <li className="d-flex align-items-center gap-3 w-25"  onClick={(e)=> handelClick(e,"kursbuchen")}>
            <FaPencilAlt className="fs-4" />
            <span>Kurs buchen</span>
          </li>

          <li className="d-flex align-items-center gap-3 justify-content-between w-25"   onClick={(e)=> handelClick(e,"standorte")}>
            <div className="d-flex align-items-center gap-3">
              <CiLocationOn className="fs-4" />
              <span>Standorte</span>
            </div>
            <FiChevronRight className="ms-5" />
          </li>
        </ul>
        </div>

      

 
       {/* middle part*/}

       <div>


            {check === "deutschkurse" ? (
                <div>deutschkurse</div>
            ): check === "telcPrüfung" ? (
                <div>telcPrüfung</div>
            ): check === "vorteile" ? (
                <div>vorteile</div>
            ): check === "kursbuchen" ? (
                <div>kursbuchen</div>
            ): check === "standorte" ? (
                <div>standorte</div>
            ) : (
                null
            )}


       </div>


       {/* end part */}

       <div>
            <ul className="list-unstyled d-flex justify-content-between align-items-center w-25 fs-4">
                <li className="d-flex align-items-center gap-3">
                <span>Kontakt</span>
                </li>
                <li className="d-flex align-items-center gap-3">
                <span>Impressum</span>
                </li>
                <li className="d-flex align-items-center gap-3">
                <span>Datenschutz</span>
                </li>
            </ul>
       </div>


      </div>


    </div>
  );
};

export default Hambuger;
