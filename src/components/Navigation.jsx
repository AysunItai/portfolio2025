import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';



function Navigation () {
  return (
    <nav>
        <Link to='/'><img src={logo} alt="logo" /></Link>
        <div className="buttons">
          <button className="btn btn-primary"><Link to='/mentorship'>Mentorship</Link></button>
          <button className="btn btn-secondary"><Link to='/contact'>Say Hi</Link></button>
        </div>
    </nav>
  )
}
export default Navigation;