import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Logo from './logo.png';
import Footer from '../Footer/footer';

class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
          <div className={styles.headerLogo}><Link to='/'><img src={Logo}></img></Link></div>
          <div className={styles.headerNav}>
            <Link to="/">Katalog</Link>|
            <Link to="/">Složi sam</Link>|
            <Link to="/aboutus">O nama</Link>|    
            <Link to="/"><i className="fas fa-user-circle"></i></Link>|
            <Link to="/"><i className="fas fa-shopping-cart"></i></Link>       
          </div> 
      </div>
    );
  }
}

export default Header;
