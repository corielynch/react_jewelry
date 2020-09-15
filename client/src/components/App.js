import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import Shop from './pages/Shop';
import Home from './pages/Home';
import About from './pages/About';
import Press from './pages/Press';
// import Lookbook from './pages/Lookbook';
import Header from './layouts/header/header';
// import FAQ from './pages/faq';
// import Account from './pages/account';
import Nav from './layouts/nav/nav'
import Footer from './layouts/footer/footer';
import Contact from './layouts/contact/contact'


// import Switch from 'react-bootstrap/esm/Switch';

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
                        {/* <Route path='/Lookbook' exact component={Lookbook} /> */}
                        <Route path='/Header' exact component={Header} />
                        <Route path='/Contact' exact component={Contact} />
                        {/* <Route path='/FAQ' exact component={FAQ} /> */}
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
