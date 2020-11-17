import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/categoryActions'; 
import * as productActions from '../../redux/actions/productActions'; 
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const CategoryList = props => {

    useEffect(() => {
        props.actions.getCategories();
    }, [])

    const selectCategory = category => {
        props.actions.changeCategory(category);
        props.actions.getProducts(category.id);
    }

    return(
        <div>
            <h4><Badge color='warning'>Categories</Badge></h4>
            <ListGroup>
                {props.categories.map(category => {
                    return(<ListGroupItem 
                            key={category.id}
                            active={category.id === props.currentCategory.id}
                            onClick={() => selectCategory(category)}>
                                {category.categoryName}
                            </ListGroupItem>
                    );
                 })
                }
            </ListGroup>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);