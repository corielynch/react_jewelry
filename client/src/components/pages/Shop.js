import React  from 'react';
// import Product from '../layouts/product/product'
import ProductsList from './layouts/product/productsList'

const Shop = (props) => {
        console.log(JSON.stringify(props))
        // render(){
        return (
                <div>
                {/* <Product /> */}
               <ProductsList />
               </div>
                )
        // }
}
export default Shop;


// products={this.state.products}