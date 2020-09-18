import React from 'react';

//create a stateless component to display the shopping cart items
class Cart extends React.Component {

    state
    //render individual item
    render() {
        return (
            <div key={this.props.index} className="Cart">
                <figure>
                    <img src={this.props.item.Img.src} alt={this.props.item.Img.name} id={this.props.index} />
                </figure>
                    <table className="ProductInformation">
                    <tbody>
                        <tr>
                            <td><b>Image Description: </b></td>
                            <td>{this.props.item.Img.description}</td>
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
                    </table>
            </div>
        )
    }
}

export default Cart;

<div>
</div>    
