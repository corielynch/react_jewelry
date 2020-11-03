import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Shop from './pages/Shop';
import Home from './pages/Home';
import About from './pages/About';
import Press from './pages/Press';
// import Lookbook from './pages/Lookbook';
import Header from './pages/layouts/header/header';
import Contact from './pages/layouts/contact/contact'
import Faq from './pages/Faq';
import Cart from './pages/Cart';
//import Account from './pages/Account';
import Nav from './pages/layouts/navbar/Nav'
import Footer from './pages/layouts/footer/Footer';


class App extends Component {
    constructor() {
        super();
        this.state = {
            cart: {}
        };
        this.addItemToCart = this.addItemToCart.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
    }
    addItemToCart(id, count) {
        this.setState((state) => {
            const newState = {...state};
            newState.cart[id] = count;
            return newState;
        })
    }
    removeItemFromCart(id) {
        this.setState((state) => {
            const newState = {...state};
            delete newState.cart[id];
            return newState;
        })
    }
    render(){
        console.log(this.state.cart);
        return (
            <div className="page-containter">
                <div className="content-wrap">
                <Router>
                    <Header />
                    <Nav /> 
                    <Switch>
                        <Route path='/' exact>
                            <Shop cart={this.state.cart} removeItemFromCart={this.removeItemFromCart} addItemToCart={this.addItemToCart} />
                        </Route>
                        <Route path='/Home' exact component={Home} />
                        <Route path='/About' exact component={About} />
                        <Route path='/Press' exact component={Press} />
                        {/* <Route path='/Lookbook' exact component={Lookbook} /> */}
                        {/* <Route path='/Header' exact component={Header} /> */}
                        <Route path='/Contact' exact component={Contact} />
                        <Route path='/Faq' exact component={Faq} />
                        <Route path='/Cart' exact><Cart cart={this.state.cart} removeItemFromCart={this.removeItemFromCart} /></Route>
                        {/* <Route path='/Products/:id' component={shop} /> */}
                       {/* <Route path='/Account' exact component={Account} /> */}
                       </Switch>
                    <Footer /> 
            </Router> 
            </div>
        </div>      
        )
    }
}


export default App;

