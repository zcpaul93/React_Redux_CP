import React from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
  } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const CartSummary = props => {
    const renderEmpty = () => {
        return (
            <NavItem>
                <NavLink>Sepetiniz Boş</NavLink>
            </NavItem>
        );
    }
    const renderSummary = () => {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepetiniz
                </DropdownToggle>
                <DropdownMenu right>
                    {   props.cart.map(cartItem => {
                            return (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color='danger' onClick={() => props.actions.removeFromCart(cartItem.product)}>X</Badge>   
                                {cartItem.product.productName}
                                <Badge color='success'>{cartItem.quantity}</Badge>
                            </DropdownItem>  
                     )})}
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to='/cart'>Sepete Git</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    return (
        <div>
            {props.cart.length>0?renderSummary():renderEmpty()}
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

export default connect(mapStateToProps, mapDispatchToPros)(CartSummary);