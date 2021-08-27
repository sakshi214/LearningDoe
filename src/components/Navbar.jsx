import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';




function Navbar() {
   const [click, setClick] = useState(false);
   const [button, setButton]= useState(true);

   const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
   useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);


    return (
       <>
     <nav className="navbar">
         <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick=
            {closeMobileMenu}>
               LearningDoe <i className="fab fa-typo3"></i>
            </Link> 
            <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                  <Link to='/' className='nav-links'onClick={closeMobileMenu}>
                     Home
                  </Link>
               </li>

               <li className='nav-item'>
                  <Link to='/courses' className='nav-links'onClick={closeMobileMenu}>
                     Courses
                  </Link>
               </li>

               <li className='nav-item'>
                  <Link to='/sign-up' className='nav-links-mobile'onClick={closeMobileMenu}>
                     Sign Up
                  </Link>
               </li>

               <li className='nav-item'>
                  <Link to='/quicklinks' className='nav-links'onClick={closeMobileMenu}>
                     Quicklinks
                  </Link>
               </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
         </div>
     </nav>
    
       </>
    )
}

export default Navbar
