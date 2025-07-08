import React, { useState } from "react";
import "../css/register.css";
import { CreateUser } from "../api/register.ts"; 

const Register: React.FC = () => {

      type FormData = {
        nachName: string;
        vorName: string;
        anrede: string;
        geburtstag: string; 
        straßeAndHausnummer: string;
        plz: string;
        stadt: string;
        land: string;
        email: string;
        confirmEmail: string;
        password: string;
        confirmPassword: string;
      };


  const [data,setData] = useState<FormData>({
    nachName: "",
    vorName: "",
    anrede: "",
    geburtstag: "",
    straßeAndHausnummer: "",
    plz: "",
    stadt: "",
    land: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();

   if(data.nachName === "" || data.vorName === "" || data.anrede === "" || data.geburtstag === "" || data.straßeAndHausnummer === "" || data.plz === "" || data.stadt === "" 
    || data.land === "" || data.email === "" || data.confirmEmail === "" || data.password === "" || data.confirmPassword === "") {
     alert("Bitte füllen Sie alle Felder aus.");
     return;
   }
    if(data.email !== data.confirmEmail) {
      alert("E-Mail-Adressen stimmen nicht überein.");
      return;
    }
    if(data.password !== data.confirmPassword) {
        alert("Passwörter stimmen nicht überein.");
        return;
      }
    if(data.password.length < 8) {
      alert("Passwort muss mindestens 8 Zeichen lang sein.");
      return;
    }
    if(!/[A-Z]/.test(data.password) || !/[0-9]/.test(data.password) || !/[!@#$%^&*]/.test(data.password)) {
      alert("Passwort muss mindestens einen Buchstaben, eine Zahl und ein Sonderzeichen enthalten.");
      return;
    }

    const fetching = {
    nachName: data.nachName,
    vorName: data.vorName,
    anrede: data.anrede,
    geburtstag: data.geburtstag,
    straßeAndHausnummer: data.straßeAndHausnummer,
    plz: data.plz,
    stadt: data.stadt,
    land: data.land,
    email: data.email,
    password: data.password,
    }

    try{
                console.log(data)
    await CreateUser(fetching)
    }catch(error) {
      console.error("Fehler beim Erstellen des Benutzers:", error);
    }
}


  return (
    <div>
      <div className="d-flex align-itemd-center justify-content-center containerRegister">
        <div className="d-flex flex-column justify-content-center gap-3 w-50 me-5">
          <h1>Ihre Anmeldung zum Deutschkurs</h1>
          <ol>
            <li>Registrieren Sie sich kostenlos in unserem Webshop.</li>
            <li>Absolvieren Sie unseren kostenlosen Einstufungstest.</li>
            <li>Schließen Sie die Buchung ab.</li>
          </ol>
        </div>

        <div>
          <img
            className="foto ms-5 w-75"
            src="https://www.deutschakademie.de/wp-content/uploads/2024/11/Anmeldung-Deutschkurs-klein.svg"
            alt=""
          />
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5 container">
        <div className="container mt-5 pensonlicheDatenEmailContainer w-75">
          <h1 className="mb-5">Registrierung</h1>

          <h3>Persönliche Daten</h3>

          <form className="d-flex flex-column gap-3" onSubmit={(e) => handleSubmit(e)}>
            <div className="persolicheDatenContainer">
              <input type="text" placeholder="Nachname" name="nachName" value={data.nachName} onChange={handleChange} required className="" />
              <input type="text" placeholder="Vorname"  name="vorName" value={data.vorName} onChange={handleChange} className="" />
             <select title="a" name="anrede" value={data.anrede} onChange={handleChange}>
             <option value="">Anrede wählen</option>
               <option value="Herr">Herr</option>
                 <option value="Frau">Frau</option>
                    </select>

              <input type="date" placeholder="Geburtstag" name="geburtstag" value={data.geburtstag} onChange={handleChange} className="" />
              <input
                type="text"
                placeholder="Straße und Hausnummer"
                className=""
                 name="straßeAndHausnummer" value={data.straßeAndHausnummer} onChange={handleChange}
              />
              <input type="text" placeholder="PLZ" name="plz" value={data.plz} onChange={handleChange}  className="" />
              <input type="text" placeholder="Stadt" name="stadt" value={data.stadt} onChange={handleChange} className="" />
              <input type="text" placeholder="Land" name="land" value={data.land} onChange={handleChange} className="" />
            </div>
            <hr />

            <h3>E-Mail-Adresse & Passwort</h3>
            <div className="emailPasswortContainer">
              <input
                type="email"
                placeholder="E-Mail-Adresse"
                className=""
                required
                 name="email" value={data.email} onChange={handleChange}
              />
              <input
                type="email"
                placeholder="E-Mail-Adresse bestätigen"
                className=""
                 name="confirmEmail" value={data.confirmEmail} onChange={handleChange}
              />
              <input type="password" placeholder="Passwort" name="password" value={data.password} onChange={handleChange} className="" />
              <input
                type="password"
                placeholder="Passwort wiederholen"
                className=""
                 name="confirmPassword" value={data.confirmPassword} onChange={handleChange}
              />
            </div>
            <p>** Dein Passwort muss mindestens 8 Zeichen, einen Buchstaben, eine Zahl und ein Sonderzeichen haben.</p>
            <hr />

            <div>
              <h4>Warum hast du dich für die DeutschAkademie entschieden?</h4>
   <select title="a" name="anrede" value={data.anrede} onChange={handleChange}>
                <option value="">Anrede wählen</option>
                <option value="Herr">Herr</option>
                <option value="Frau">Frau</option>
              </select>
    <hr />

    <h1>AGB & Datenschutz</h1>
    <div>
      
    </div>
    <div><input type="checkbox" title="a"/> <span>Ich erkläre mich mit den <a href="https://www.deutschakademie.de/agb/">AGB</a> der DeutschAkademie einverstanden.</span></div>
    <div><input type="checkbox" title="a"/> <span>Ich habe die <a href="https://www.deutschakademie.de/datenschutz/">Datenschutzerklärung</a> gelesen.</span></div>
    <div><input type="checkbox" title="a"/> <span>Meldet mich zum Newsletter an.</span></div>
    <br /><br />
    <p>Wir verwenden Ihre personenbezogenen Daten, um eine möglichst gute Benutzererfahrung auf dieser Website zu ermöglichen, den Zugriff auf Ihr Konto zu verwalten und für weitere Zwecke, die in unserer Datenschutzerklärung beschrieben sind.</p>

            </div>

            <button type="submit" className="btn btn-primary" >
              Registrieren
            </button>
          </form>
        </div>

        <div className="w-25 d-flex flex-column justify-content-center align-items-center gap-5 mt-5">
          <div>
            <span>🔆🔆🔆🔆🔆</span>
            <p>
              Ich bin mit allem sehr zufrieden, besonders mit unserem Lehrer.
              Ich empfehle es jedem! – Vivien S.
            </p>
          </div>

          <div>
            <i className="fs-4">Ihre Vorteile bei uns</i>
            <span>🔆</span>
            <p>ausgezeichnet mit über 4.000 5-Sterne Bewertungen</p>
          </div>

          <div>
            <span>🧑‍🎓👨‍🎓👩‍🎓</span>
            <p>über 15.000 Teilnehmende pro Jahr</p>
          </div>

          <div>
            <span>👍</span>
            <p>über 20 Jahre Erfahrung</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;
