import React, { Component } from 'react';
import styles from './styles.module.css';
import Photo from '../../assets/img/all.jpg';

class Detail extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.DetailPhoto}><img src={Photo}></img></div>
        <div className={styles.DetailAside}>
            <div className={styles.AsideHeader}></div>
            <div className={styles.Description}></div>
            <div className={styles.Size}>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
  
            </div>
            <i className="fas fa-shopping-cart"></i>       
        </div>
      </div>
    );
  }
}

export default Detail;