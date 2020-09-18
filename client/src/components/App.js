import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Shop from './pages/Shop';
import Home from './pages/Home';
import About from './pages/About';
import Press from './pages/Press';
import Lookbook from './pages/Lookbook';
import Header from './layouts/header/header';
// import FAQ from './pages/faq';
// import Account from './pages/account';
import Contact from './layouts/contact/contact'
import Faq from './pages/Faq';
//import Account from './pages/Account';
import Navbar from './layouts/nav/Navbar'
import Footer from './layouts/footer/Footer';
import Cart from './layouts/product/cart'


class App extends React.Component {
    render(){
        return (
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
                        {/* <Route path='/Header' exact component={Header} /> */}
                        <Route path='/Contact' exact component={Contact} />
                        <Route path='/Faq' exact component={Faq} />
                        <Route path='/products/:id' exact component={Cart} />
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

