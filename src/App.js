import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Products from './Products';

class App extends Component {
  state = {
    products: undefined,
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    let url = 'http://0.0.0.0:8080/api/products';

    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((results) => results.json())
      .then((results) => {
        this.setState({ products: results });
      });
  }

  render() {
    return (
      <main className="app">
        <Router>
          <header>
            <nav className="selected">
              <Link to="/">商城</Link>
            </nav>
            <nav>
              <Link to="/order">订单</Link>
            </nav>
            <nav>
              <Link to="/addProduct">+ 添加商品</Link>
            </nav>
          </header>
        </Router>
        <Products products={this.state.products} />
      </main>
    );
  }
}

export default App;
