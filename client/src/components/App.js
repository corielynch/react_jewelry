import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Shop from './pages/Shop';
import Home from './pages/Home';
import About from './pages/About';
import Press from './pages/Press';
import Lookbook from './pages/Lookbook';
import Header from './pages/Header';
import Faq from './pages/Faq';
import Account from './pages/Account';
import Navbar from './pages/Navbar';
import ProductPage from './pages/Product-Page';
import { FooterContainer } from '../containers/footer';

class App extends React.Component {
    render(){
        return (
            /* for footer <> */
            <div className="page-containter">
                <div className="content-wrap">
                <Router>
                    <Header />
                        <Navbar />  
                    <Switch>
                        <Route path='/' exact component={Shop} />
                        <Route path='/Home' exact component={Home} />
                        <Route path='/About' exact component={About} />
                        <Route path='/Press' exact component={Press} />
                        <Route path='/Lookbook' exact component={Lookbook} />
                        <Route path='/Header' exact component={Header} />
                        <Route path='/Faq' exact component={Faq} />
                        <Route path='/Account' exact component={Account} />
                        <Route path='/product-page' exact component={ProductPage} />
                    </Switch>
                <FooterContainer />
            </Router> 
        </div>
        </div>      
        ); /* ; might not need */
    }
}


export default App;
