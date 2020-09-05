import React from 'react';
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
}

export default App;