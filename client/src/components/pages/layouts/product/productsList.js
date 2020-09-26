import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../../actions'
import Product from './product'
import getProducts from '../../../../apis/productsDB'


class ProductsList extends React.Component {
   componentDidMount(){
      this.props.fetchProducts()
   }
   render() {
      console.log(this.props.products)
      return <div>Hello</div>
   }
}

const mapStateToProps = (state) => {
   return { products: state.products}
}

export default connect(mapStateToProps, { fetchProducts})(ProductsList)



// class ProductsList extends React.Component {
//    state = { products: [] };
//    componentDidMount() {
//     this.fetchData()
//     .then(response => {
//        this.setState({products: response.data})
    
//     })
// }
// async fetchData() {
//     let response = await getProducts()
//     return response;
//    }
//    render(){
//        return (
//        <div>
//         {
//            this.state.products.map(( product ) => <Product product={product}  />)
//         }
//        </div>
//        )
//    }

// }

// export default ProductsList;
 


