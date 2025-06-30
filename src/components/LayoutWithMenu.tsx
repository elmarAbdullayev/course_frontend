import { Outlet } from "react-router-dom";
import Menu from "./home/menu/Menu.tsx";


const LayoutWithMenu:React.FC = () => (
  <>
    <Menu />
    <Outlet />
  </>
);

export default LayoutWithMenu;
