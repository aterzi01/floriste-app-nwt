import React, { Component } from 'react';
import styles from './styles.module.css';
import mainphoto from '../../assets/img/all.jpg';
import postphoto from '../../assets/img/yxxx.jpg';
import Post from '../../components/Post/post';

var i = 0;
var k = 1;
var list1 = [], list2 = [], list3 = [];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ''
    };
  }

  componentWillMount() {    
    for (i = 0; i < 15; i++) {
      if (k === 1) {
        list1.push(<Post img={mainphoto}></Post>)
        k++;
      }
      else if (k === 2) {
        list2.push(<Post img={postphoto}></Post>)
        k++;
      }
      else if (k === 3) {
        list3.push(<Post img={mainphoto}></Post>)
        k = 1;
      }
    }
  }

  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.MainPhoto}>
          <img src={mainphoto}></img>
          <h2  key={this.state.page+"page"} className={styles.PageTitle}>{this.props.match.params.id}</h2>
        </div>
        <div className={styles.Main}>
          <div className={styles.PhotoColumn}>
            {list1}
          </div>
          <div className={styles.PhotoColumn}>
            {list2}
          </div>
          <div className={styles.PhotoColumn}>
            {list3}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;