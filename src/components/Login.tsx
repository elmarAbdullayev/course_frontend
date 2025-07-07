import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container">

      <div
        className="d-flex justify-content-center iconsLogin"
        onClick={() => handleClick()}
      >
        <img
          src="https://wallpapercave.com/wp/wp11095556.jpg"
          alt=""
          className="logo"
        />
        <div className=" logo-box">
          <h5>Deutsch</h5>
          <h4>Akademia</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 col-12 leftSideLogin">
          
          <div className="d-flex justify-content-center align-items-center flex-column ">
            <div>
              <h1>Login</h1>
              <h3>für Kursteilnehmende</h3>
            </div>
           
            <form className="w-50">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-Mail
                </label>
                <input
                  type="email"
                  className="form-control p-3"
                  id="email"
                  placeholder="bitte eingeben"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Passwort
                </label>
                <input
                  type="password"
                  className="form-control p-3"
                  id="password"
                  placeholder="bitte eingeben"
                />
              </div>

              <div>
             <button type="submit" className="btn btn-primary w-25 bg-black p-2 me-5 einlogButton">Einloggen </button>
              <button type="submit" className="btn btn-primary w-50 p-2 einlogButonLehrer">Login für Lehrerperson </button>
              </div>
  
            </form>
            
            <div className="d-flex flex-column  mt-3">
             <p >Hast du noch kein Konto? <Link to="/register" className="text-decoration-none">Jetzt Konto erstellen</Link></p> 
             <p>Passwort vergessen?<Link to="/forgot-password" className="text-decoration-none">Mein Passwort zurücksetzen</Link></p>

              </div>


          </div>

        </div>

        <div className="col-md-4 rightSideLogin">
          <img
            src="https://api.army.mil/e2/c/images/2023/03/03/6c5ddf79/original.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
