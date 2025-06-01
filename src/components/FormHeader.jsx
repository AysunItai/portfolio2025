import logo from '../assets/logo.png';
import deleteIcon from '../assets/delete.png';
import reload from '../assets/reload.png';
import myImg from '../assets/myImg.png';
import {Link} from 'react-router-dom';


function FormHeader () {
  return (
    
    <div className="form-header">
         <nav>
            <img src={logo} alt="logo" />
              <div className="buttons">
                  <button ><img src={reload} alt='reload'/> </button>
                <Link to='/'><img className="delete-icon" src={deleteIcon} alt="delete Icon"/> </Link>
              
              </div>
            </nav>
            <img className="myImg" src={myImg} alt="logo" />
    </div>
     
    )
}
export default FormHeader