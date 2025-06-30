import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/home_menu.css";
import { TbBooks } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { GrLogout } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiTwotoneLike } from "react-icons/ai";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <div>
      <nav className=" container ">
        <ul className="menu d-flex justify-content-between list-unstyled p-3 ">
          <li onClick={() => window.location.reload()}>
            <img
              src="https://wallpapercave.com/wp/wp11095556.jpg"
              alt=""
              className="logo"
            />
            <div className=" logo-box">
              <h5>Deutsch</h5>
              <h4>Akademia</h4>
            </div>
          </li>
          <li className="noneBox">
            <TbBooks className="fs-4" />
            <Link to="/" className="text-decoration-none">
              Deutschkurse
            </Link>
          </li>
          <li className="noneBox">
            <PiStudentDuotone className="fs-4" />
            <Link to="/login">telc Prüfung</Link>
          </li>
          <li className="noneBox">
            <AiTwotoneLike className="fs-4" />
            <Link to="/register">Vorteile</Link>
          </li>
          <li className="noneBox">
            <FaPencilAlt className="fs-4" />
            <Link to="/">Kurs buchen</Link>
          </li>
          <li className="noneBox">
            <CiLocationOn className="fs-4" />
            <Link to="/login">Location</Link>
          </li>
          <li>
            <SlBasket className="fs-4" />
          </li>
          <li>
            <GrLogout className="fs-4" />
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu className="fs-4" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
