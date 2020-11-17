import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import { Table, Button } from 'reactstrap';

const CartDetail = props => {
 
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.cart.map(cartItem => {
                     return(<tr key={cartItem.product.id}>
                            <th scope="row">{cartItem.product.id}</th>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.quantity}</td>
                            <td>
                                <Button color="danger" 
                                    onClick={() => props.actions.removeFromCart(cartItem.product)}>
                                    Sil
                                </Button>
                            </td>
                        </tr> )
                    })}
                </tbody>
            </Table>  
        </div>
    );
}

function mapDispatchToPros(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(CartDetail);