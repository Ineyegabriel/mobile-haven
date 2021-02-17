import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Layout from "./Components/Layout/Layout";
import ShopPage from "./Pages/ShopPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";


const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
            <Route path="/" exact component={ShopPage}/>
            <Route path="/phonedetails"  component={ProductDetailsPage}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
