import React from 'react';
<<<<<<< HEAD
import{BrowserRouter, Route, Link} from 'react-router-dom';
import OrderPage from './pages/Order-Page';
import ProductPage from './pages/Product-Page';
import ShopPage from './pages/Shop-Page';
import Nav from './layouts/nav'

const App =  () => {
    return (
        <div>
            <Nav />
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={ShopPage} />
                    <Route path='/product-page' exact component={ProductPage}></Route>
                    <Route path='/order-page' exact component={OrderPage}></Route>
                </div>
            </BrowserRouter>
        </div>
        )
=======
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import Shop from './pages/Shop';
import Home from './pages/Home';
import About from './pages/About';
import Press from './pages/Press';
import Lookbook from './pages/Lookbook';
import Header from './pages/Header';
import FAQ from './pages/FAQ';
import Account from './pages/Account';
import Nav from './layouts/nav'
import ProductPage from './pages/ProductPage';
import Footer from './layouts/footer/footer';
import Switch from 'react-bootstrap/esm/Switch';

class App extends React.Component {
    render(){
        return (
<<<<<<< HEAD
            <div className="page-containter">
                <div className="content-wrap">
                <Router>
                    <Header />
                        <Nav />  
                    <Switch>
=======
            <div>
              
                <BrowserRouter>
                <div className="Header-Class">
                    <Header />
                    <div className = "Nav-Class">
                        <Nav />
                    </div>
                    <br />
                    <hr />
                </div>
                    <div className="body-class">
>>>>>>> 20c287312acf0a71aa1e2684705407bac1ba0190
                        <Route path='/' exact component={Shop} />
                        <Route path='/Home' exact component={Home} />
                        <Route path='/About' exact component={About} />
                        <Route path='/Press' exact component={Press} />
                        <Route path='/Lookbook' exact component={Lookbook} />
                        <Route path='/Header' exact component={Header} />
                        <Route path='/Contact' exact component={Contact} />
                        <Route path='/FAQ' exact component={FAQ} />
                        <Route path='/Account' exact component={Account} />
                        <Route path='/product-page' exact component={ProductPage} />
                    </Switch>
                    <Footer />
            </Router> 
            </div>
        </div>      
        )
    }
>>>>>>> 8fe4f48ec36c65f7c7ebe678a080fe42674fc9ca
}


export default App;
