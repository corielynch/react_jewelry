import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Shop from './pages/Shop';
import Home from './pages/Home';
import About from './pages/About';
import Press from './pages/Press';
import Lookbook from './pages/Lookbook';
import Header from './pages/Header';
import FAQ from './pages/FAQ';
import Account from './pages/Account';
import Nav from './layouts/nav';
import ProductPage from './pages/ProductPage';
import { FooterContainer } from '../containers/footer';

class App extends React.Component {
    render(){
        return (
            <div className="page-containter">
                <div className="content-wrap">
                <Router>
                    <Header />
                        <Nav />  
                    <Switch>
                        <Route path='/' exact component={Shop} />
                        <Route path='/Home' exact component={Home} />
                        <Route path='/About' exact component={About} />
                        <Route path='/Press' exact component={Press} />
                        <Route path='/Lookbook' exact component={Lookbook} />
                        <Route path='/Header' exact component={Header} />
                        <Route path='/FAQ' exact component={FAQ} />
                        <Route path='/Account' exact component={Account} />
                        <Route path='/product-page' exact component={ProductPage} />
                    </Switch>
                <FooterContainer />
            </Router> 
        </div>
        </div>      
        )
    }
}


export default App;
