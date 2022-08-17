import './NavBar.css';
import Logo from "../../img/logo_small.png";

function NavBar() {
  return (
    <div className="NavBar">
      <div><img src={Logo}/></div>
      <ul>
        <li><a href= "#">Inicio</a></li>
        <li><a href= "#">Productos</a></li>
        <li><a href= "#">Contacto</a></li>
      </ul>
    </div>
  );
}

export default NavBar;



