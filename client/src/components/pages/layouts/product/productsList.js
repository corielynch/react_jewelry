import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../../actions'
import Product from "./product";
import './product.css'


class ProductsList extends React.Component {
   componentDidMount() {
      this.props.fetchProducts()
   }

   renderList() {
      return this.props.products.map(product => {
         return ( <Product key={product.id} {...product} {...this.props}/>)
      })
   }

   render() {
      return <div>{this.renderList()}</div>
   }

}


const mapStateToProps = (state) => {
   return { products: state.products }
}

export default connect(mapStateToProps, { fetchProducts })(ProductsList)
