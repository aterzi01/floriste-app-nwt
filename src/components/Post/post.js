import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';



class Post extends Component {
  render() {
    return (
        <div className={styles.Post}>
            <div className={styles.container}>
                <img className={styles.image} src={this.props.img}/>
                <div className={styles.middle}>
                    <Link to='/buket/cvijet' className={styles.text}>KUPI</Link>
                </div>
                
            </div>
            <div className={styles.Price}>
                <p>Cvijet</p>
                <p>100kn</p>
            </div>
        </div>
    );
  }
}

export default Post;