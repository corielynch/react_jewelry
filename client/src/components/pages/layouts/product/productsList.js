import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../../actions'
import './product.css'


class ProductsList extends React.Component {
   componentDidMount(){
      this.props.fetchProducts()
   }

   renderList(){
      return this.props.products.map( product => {
         return (
         <div className="container" key={product.id}>
            <div className="wrapper"> 
               <span className="price">{product.price}</span>
               <div className="image">
                  <img src={product.img_src} alt={product.handle}></img>
               </div>
               <div className="card-content">
                  <div className="wrapper">
                     <div className="title">{product.title}</div>  
                     <p>{product.title}</p> 
                     <span className="price">{product.price}</span> 
                        <div className="content tag">
                           <div className="name tag-name">{product.tag}</div>
                           <div className="size-value">
                           <span className="category">{product.tag}</span>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
         </div>   
           
         )
      })
   }

   render() {
      return <div>{this.renderList()}</div>
   }

}


const mapStateToProps = (state) => {
   return { products: state.products}
}

export default connect(mapStateToProps, { fetchProducts})(ProductsList)
