import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions'

//create a stateless component to display the shopping cart items
class Cart extends React.Component {
    componentDidMount() {
       this.props.fetchProducts()
    }
    // state
    //render individual item
    render() {
        console.log(this.props.products);
        return (
            <div key={this.props.index} className="Cart">
                {
                    this.props.products && 
                    Object.entries(this.props.cart).map(([id, count]) => {
                        const product = this.props.products.find((product) => id === product.id);
                        return <h1>{product.title}</h1>
                    })
                }
                {/* <figure>
                    <img src={this.props.item.img_src.price} alt={this.props.item.img_src.name} id={this.props.index} />
                </figure>
                    <table className="ProductInformation">
                    <tbody>
                        <tr>
                            <td><b>Image Description: </b></td>
                            <td>{this.props.item.img_src.description}</td>
                        </tr>
                        <tr>
                            <td><b>Size:</b></td>
                            <td>{this.props.item.order.size}</td>
                        </tr>
                        <tr>
                            <td><b>Type:</b></td>
                            <td>{this.props.item.order.type}</td>
                        </tr>
                        <tr>
                            <td><b>Quantity:</b></td>
                            <td>{this.props.item.order.quantity}</td>
                        </tr>
                        <tr>
                            <td><b>Price Per:</b></td>
                            <td>${this.state.price}.00</td>
                        </tr>
                        <tr>
                            <td><b>Total:</b></td>
                            <td>${this.state.total}.00</td>
                        </tr>
                    </tbody>
                    </table> */}
                <div className="cartCheckout">
                    <p className="cartPrice"><span className="money"></span></p>
                    <p className="cartMessage"><em>Taxes and shipping not included</em></p>

                    <input type="submit" name="update" value="Update" className="secondary" />
                    <input type="submit" name="checkout" value="Checkout" />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { products: state.products }
 }
 
 export default connect(mapStateToProps, { fetchProducts })(Cart)

