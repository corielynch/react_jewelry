import React from 'react';
import Product from './product'
import getProducts from './api'


class ProductsList extends React.Component {
   state = { products: [] };
   
   componentDidMount() {
    this.fetchData()
    .then(response => {
       this.setState({products: response.data})
    
    })
}

async fetchData() {
    let response = await getProducts()
    return response;
   }

   render(){
       return (
       <div>
        {
           this.products.map(( product ) => <Product title={this.state.product}  />)
        }
       </div>
    
       )
   }

}

export default ProductsList;
 