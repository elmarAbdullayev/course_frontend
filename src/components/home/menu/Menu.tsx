import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/home_menu.css";
import { TbBooks } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiTwotoneLike } from "react-icons/ai";
import Hamburger from './Hamburger.tsx';
import { RiLoginBoxFill } from "react-icons/ri"; 
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {logout,login} from "../../../redux/slice.ts"
import { selectToken } from "../../../redux/slice.ts";

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const token = useSelector(selectToken)
  const dispatch = useDispatch()

  console.log(token)

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
     window.location.reload()
  };


  return (
    <div>
      <nav className=" container">

        {showMenu && (
       <div className="menu-overlay">
          <Hamburger setShow={setShowMenu}  showMenu={showMenu}/>
        </div>
        )}

     
            

        <ul className="menu d-flex justify-content-between list-unstyled p-3 ">
          <li onClick={() => handleClick()}>
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
            <Link to="/" className="text-decoration-none"  onClick={()=>setShowMenu(!showMenu)}>
              Deutschkurse
            </Link>
          </li>
          <li className="noneBox">
            <PiStudentDuotone className="fs-4" />
            <Link to="/">telc Prüfung</Link>
          </li>
          <li className="noneBox">
            <AiTwotoneLike className="fs-4" />
            <Link to="/">Vorteile</Link>
          </li>
          <li className="noneBox">
            <FaPencilAlt className="fs-4" />
            <Link to="/">Kurs buchen</Link>
          </li>
          <li className="noneBox">
            <CiLocationOn className="fs-4" />
            <Link to="/">Location</Link>
          </li>
          <li>
            <SlBasket className="fs-4" />
          </li>

          {token ? (
              <li >
          <Link to={"/login"} onClick={()=>dispatch(logout())}><RiLogoutBoxLine  className="fs-4"/></Link> 
          </li>
          ): <li >
          <Link to={"/login"}><RiLoginBoxFill className="fs-4"/></Link> 
          </li>
           }
    

          <li onClick={() => setShowMenu(!showMenu)}>
            <RxHamburgerMenu className="fs-4" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
