import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <main className="app">
        <header>
          <Router>
            <nav className="selected">
              <Link to="/shop">商城</Link>
            </nav>
            <nav>
              <Link to="/shop">订单</Link>
            </nav>
            <nav>
              <Link to="/shop">+ 添加商品</Link>
            </nav>
            <Route path="/shop" component={Products}></Route>
          </Router>
        </header>
      </main>
    );
  }
}

export default App;
