import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/header.js';
import Home from './pages/Home/home.js';
import Footer from './components/Footer/footer.js';
import Main from './pages/Main/main.js';
import Detail from './pages/Detail/detail.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header></Header>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/katalog/:id" component={Main} />
        <Route exact path="/buket/cvijet" component={Detail} />
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
