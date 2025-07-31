import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/home/Home.tsx"
import Login from "./components/Login.tsx";
import LayoutWithMenu from "./components/LayoutWithMenu.tsx";
import Register from "./components/Register.tsx";
import AdminPanel from "./components/AdminPanel.tsx";



function App() {

  return (

  <Router>
      <Routes>
        {/* Seiten MIT Menü */}
        <Route element={<LayoutWithMenu />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPanel/>} />
        </Route>

        {/* Seiten OHNE Menü */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}


export default App;
