import React from 'react';
import axios from 'axios'
import Product from './product'
import getProducts from './api.js'


class ProductsList extends React.Component {
    state = {
        products: []
    };

    componendDidMount() {
        this.fetchData();
        this.setState({products: response.data})
    }

    fetchData = async () => {
     return response = await getProducts()
    }

   
    // const aPromise = async ()=>{ 
    //         const response = await axios.get('/api/search-products'
    //         )
    // }

    //  componentDidMount = async ()=>{ 
    //     const response = await axios.get('/api/search-products', 
    //     )
    //     this.setState({products: response.data})
    //     console.log(this.state)
    //     // console.log(state)
    //   }
     
    render(){
        return ( 
        <div>
         <Product product={this.state.products} />
        </div>
      
        )
    }
    // return <div>Products List</div>
};

export default ProductsList;









    // props.products.map((product) => {
    //     return (
    //         <div>
    //             <img src="{product.img.src}" alt="{product description}"></img>
    //             <div className="{product.title}">{product.title}</div>
    //         </div>
     
    //     )
    // })
    // console.log(props.products)
