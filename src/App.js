import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Products from './Products';

class App extends Component {
  state = {
    products: undefined,
    // products: [{ id: 1, name: '可乐1', price: '1元', unit: '瓶' }],
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    let url = 'localhost:8080/api/products';
    fetch(url)
      .then((results) => results.json())
      .then((results) => this.setState({ products: results }));
  }

  render() {
    return (
      <main className="app">
          <Router>
          <header>
            <nav className="selected">
              <Link to="/shop">商城</Link>
            </nav>
            <nav>
              <Link to="/shop">订单</Link>
            </nav>
            <nav>
              <Link to="/shop">+ 添加商品</Link>
            </nav>
          </header>
            <Route
              path="/shop"
              render={() => <Products products={this.state.products} />}
            ></Route>
          </Router>

      </main>
    );
  }
}

export default App;
