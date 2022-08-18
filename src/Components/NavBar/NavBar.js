import './NavBar.css';
import Logo from "../../img/logo_small.png";

function NavBar() {
  return (
    <div className="NavBar">
      <div><img className='logo' src={Logo}/></div>
      <ul>
        <li><a className='linkNavBar' href= "#">Inicio</a></li>
        <li><a className='linkNavBar' href= "#">Productos</a></li>
        <li><a className='linkNavBar' href= "#">Contacto</a></li>
      </ul>
    </div>
  );
}

export default NavBar;



