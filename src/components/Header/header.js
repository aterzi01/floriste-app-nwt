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
          <div className="dropdown">
            <Link className="dropbtn">Katalog</Link>
            <div className="dropdownContent">
              <Link to='/katalog/čestitke'>Čestitke</Link>
              <Link to='/katalog/godišnjica'>Godišnjica</Link>
              <Link to='/katalog/vjenčanje'>Vjenčanje</Link>
              <Link to='/katalog/uljepšaj dan'>Uljepšaj dan</Link>
              <Link to='/katalog/zadnji tren'>Zadnji tren</Link>
              <Link to='/katalog/sahrana'>Sahrana</Link>
            </div>
          </div>|
          <Link className={styles.HeaderLink} to="/">Složi sam</Link>|
          <Link className={styles.HeaderLink} to="/aboutus">O nama</Link>|
          <Link className={styles.HeaderLink} to="/"><i className="fas fa-user-circle"></i></Link>|
          <Link className={styles.HeaderLink} to="/"><i className="fas fa-shopping-cart"></i></Link>
        </div>
      </div>
    );
  }
}

export default Header;
