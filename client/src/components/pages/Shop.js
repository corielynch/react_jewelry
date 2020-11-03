import React  from 'react';
// import Product from '../layouts/product/product'
import ProductsList from './layouts/product/productsList'

const Shop = (props) => {
        // render(){
        return (
                <div>
                {/* <Product /> */}
               <ProductsList {...props}/>
               {/* need to add or remove. */}
               </div>
                )
        // }
}
export default Shop;
