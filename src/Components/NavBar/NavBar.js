import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className="NavBar">
      <Link to='/'><img className='logo' src='/img/logo_small.png' alt='Logo Hora de Jugar'/></Link>
      <ul>
        <li><Link to='/' className='linkNavBar'>Inicio</Link></li>
        <li><Link to='/category/tablero' className='linkNavBar'>Juegos de Tablero</Link></li>
        <li><Link to='/category/cartas' className='linkNavBar'>Juegos de Cartas</Link></li>
        <li><Link to='/category/puzzle' className='linkNavBar'>Puzzles</Link></li>
        <li><Link to='/contacto' className='linkNavBar'>Mis Datos</Link></li>
        <li><Link to='/cartContainer' className='linkNavBar'>Mi Carrito</Link></li>
        <li><CartWidget /></li>
      </ul>
    </div>
  );
}

export default NavBar;



