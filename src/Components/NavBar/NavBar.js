import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import Logo from "../../img/logo_small.png";

function NavBar() {
  return (
    <div className="NavBar">
      <div><img className='logo' src={Logo}/></div>
      <ul>
        <li><a className='linkNavBar' href= "#">Inicio</a></li>
        <li><a className='linkNavBar' href= "#">Productos</a></li>
        <li><a className='linkNavBar' href= "#">Contacto</a></li>
        <a href= "#"><CartWidget/></a>
      </ul>
    </div>
  );
}

export default NavBar;



