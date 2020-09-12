import React from 'react';
import{BrowserRouter, Route,} from 'react-router-dom';

import Shop from './pages/Shop';
import Home from './pages/Home';
import About from './pages/About';
import Press from './pages/Press';
import Lookbook from './pages/Lookbook';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Account from './pages/Account';
import Header from './layouts/header/header';
import ProductPage from './pages/Product-Page';


import Nav from './layouts/nav'

class App extends React.Component {
    render(){
        return (
            <div>
              
                <BrowserRouter>
                <div class="Header-Class">
                    <Header />
                    <div class = "Nav-Class">
                        <Nav />
                    </div>
                    <br />
                    <hr />
                </div>
                    <div class="body-class">
                        <Route path='/' exact component={Shop} />
                        <Route path='/Home' exact component={Home} />
                        <Route path='/About' exact component={About} />
                        <Route path='/Press' exact component={Press} />
                        <Route path='/Lookbook' exact component={Lookbook} />
                        <Route path='/Contact' exact component={Contact} />
                        <Route path='/FAQ' exact component={Faq} />
                        <Route path='/Account' exact component={Account} />
                        <Route path='/product-page' exact component={ProductPage} />
                        
                    </div>
                </BrowserRouter>
            </div>
            )
    }
}
// const App =  () => {
//     return (
//         <div>
//           <div></div>
//             <BrowserRouter>
//             <div>
//                 <Nav />
//             </div>
//                 <div>
//                     <Route path='/' exact component={Shop} />
//                     <Route path='/Home' exact component={Home} />
//                     <Route path='/About' exact component={About} />
//                     <Route path='/Press' exact component={Press} />
//                     <Route path='/Lookbook' exact component={Lookbook} />
//                     <Route path='/Contact' exact component={Contact} />
//                     <Route path='/FAQ' exact component={Faq} />
//                     <Route path='/Account' exact component={Account} />
//                 </div>
//             </BrowserRouter>
//         </div>
//         )
// }

export default App;