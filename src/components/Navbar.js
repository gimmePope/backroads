import img from '../images/logo.svg'
import { links, socialLinks } from '../data';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={img} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          
          <ul className="nav-links" id="nav-links">
            {
              links.map(link => {
              return (
              <li key={link.id}>
                <a href={link.href} className="nav-link" > {link.text} </a>
                </li>
              )
              }
            )
            }
          </ul>
  
          <ul className="nav-icons">
           {
            socialLinks.map(link => {
              return(
                <li key={link.id}>
                <a href={link.href} target={link.target} className="nav-icon"
                  ><i className={link.iconText}></i
                ></a>
              </li>
              )
              }
              )
           }
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;
