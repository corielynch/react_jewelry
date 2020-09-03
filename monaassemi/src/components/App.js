import React from 'react';
import{BrowserRouter, Route, Link} from 'react-router-dom';
import OrderPage from './pages/Order-Page';
import ProductPage from './pages/Product-Page';
import ShopPage from './pages/Shop-Page';

const App =  () => {
    return (
        <div>
            <header>Insert nav here when we know the CSS framework we want to use.</header>
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