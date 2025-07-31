import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { RiLoginBoxFill } from "react-icons/ri";
import { TbBooks } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneLike } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import "../../../css/home_menu.css";
import { useDispatch } from "react-redux";
import {logout} from "../../../redux/slice.ts"
import { selectToken } from "../../../redux/slice.ts";
import { useSelector } from "react-redux";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

type HamburgerProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean
};
const Hamburger: React.FC<HamburgerProps> = ({setShow,showMenu}) => {
  const [check, setCheck] = React.useState<string>("");
  const [checkRight, setCheckRight] = React.useState<string>("");

    const token = useSelector(selectToken)
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, s: string) => {
    setCheck(s);
    if (s !== "deutschkurse") {
      setCheckRight("");
    }
  };

  const handleClickRight = (e: React.MouseEvent<HTMLLIElement>, s: string) => {
    setCheckRight(s);
  };



  return (

    <div className="container fs-2">

      <div className="d-flex justify-content-between exit loginCloseIcons">
        <div className="d-flex align-items-center gap-4">

                  {token ? (
       <div className="d-flex">
                  <Link to={"/login"} onClick={()=>dispatch(logout())}><RiLogoutBoxLine  className="fs-4"/></Link> 
          <h3>ausloggen</h3>
       </div>

          ): 
          <div  className="d-flex align-items-center justify-content-center">
         <Link to={"/login"}><RiLoginBoxFill className="fs-4"/></Link> 
           <h3>einloggen</h3>
          </div>
 
           }
        

        </div>
        <div>
        <IoClose onClick={()=>setShow(!showMenu)}/>
        </div>
        
      </div>

      <hr />

      <div className="d-flex container ">
        <div className="row w-100 subContainerHambuger">
          {/* Left Menu */}
          <div className="col-md-4">
            <ul className="list-unstyled d-flex flex-column gap-4 fs-4">
              <li
                className="d-flex justify-content-between align-items-center w-100"
                onClick={(e) => handleClick(e, "deutschkurse")}
              >
                <div className="d-flex align-items-center gap-3">
                  <TbBooks />
                  <span>Deutschkurse</span>
                </div>
                <FiChevronRight />
              </li>

              <li
                className="d-flex justify-content-between align-items-center w-100"
                onClick={(e) => handleClick(e, "telcPrüfung")}
              >
                <div className="d-flex align-items-center gap-3">
                  <PiStudentDuotone />
                  <span>telc Prüfung</span>
                </div>
                <FiChevronRight />
              </li>

              <li
                className="d-flex justify-content-between align-items-center w-100"
                onClick={(e) => handleClick(e, "vorteile")}
              >
                <div className="d-flex align-items-center gap-3">
                  <AiTwotoneLike />
                  <span>Vorteile</span>
                </div>
                <FiChevronRight />
              </li>

              <li className="d-flex align-items-center gap-3 w-100">
                <FaPencilAlt />
                <span>Kurs buchen</span>
              </li>

              <li
                className="d-flex justify-content-between align-items-center w-100"
                onClick={(e) => handleClick(e, "standorte")}
              >
                <div className="d-flex align-items-center gap-3">
                  <CiLocationOn />
                  <span>Standorte</span>
                </div>
                <FiChevronRight />
              </li>
            </ul>
          </div>

          {/* Middle Content */}
          <div className="col-md-4 middleContent">
            {check === "deutschkurse" && (
              <ul className="list-unstyled d-flex flex-column gap-4 fs-4 ">
                <li>
                  <span>Übersicht (alle Kurse)</span>
                </li>
                <li
                  className="d-flex justify-content-between align-items-center w-100"
                  onClick={(e) => handleClickRight(e, "onlinekurse")}
                >
                  <div className="d-flex align-items-center gap-3">
                    <span>Online Kurse</span>
                  </div>
                  <FiChevronRight />
                </li>

                <li
                  className="d-flex justify-content-between align-items-center w-100"
                  onClick={(e) => handleClickRight(e, "praesenskurse")}
                >
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
                 <li>Wien</li>
              </ul>
            )}
          </div>
   
 

          {/* Right Content */}

          <div className="col-md-4 rightContent">
            {checkRight === "onlinekurse" ? (
              <div className="d-flex flex-column gap-4 fs-4">
                <ul className="list-unstyled d-flex flex-column gap-4">
                  <li>Online Intensivkurs</li>
                  <li>Online Semi-Intensivkurs</li>
                  <li>Online Wochenendkurs</li>
                  <li>Online Grammatikkurs</li>
                  <li>Online Schreibkurs</li>
                </ul>
              </div>
            ) : checkRight === "praesenskurse" ? (
              <div className="d-flex flex-column gap-4 fs-4">
                <ul className="list-unstyled d-flex flex-column gap-4">
                  <li>Hamburg</li>
                  <li>München</li>
                  <li>Wien</li>
                  <li>Köln</li>
                  <li>Frankfurt</li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <hr />

      {/* Footer */}
      <div >
        <ul className="footer list-unstyled d-flex justify-content-between align-items-center w-50 fs-4">
           <li>Startseite</li>
           <li>Kontakt</li>
          <li>Impressum</li>
          <li>Datenschutz</li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
