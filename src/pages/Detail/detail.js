import React, { Component } from 'react';
import styles from './styles.module.css';
import Photo from '../../assets/img/all.jpg';

class Detail extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.DetailPhoto}><img src={Photo}></img></div>
        <div className={styles.DetailAside}>
          <div className={styles.AsideHeader}>cvijet</div>
          <div className={styles.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non odio quis ligula pellentesque ultrices.
          Aliquam erat volutpat. Aliquam eu placerat nisl. Curabitur pretium vitae neque in faucibus. Duis ornare in lacus in accumsan.
            In sodales, quam ac blandit ultrices, sapien tellus ultricies nunc, at lobortis nisl ligula eget turpis</div>
          <div className={styles.Size}>
            <select>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <i className="fas fa-shopping-cart"></i>
          </div>

        </div>
      </div>
    );
  }
}

export default Detail;