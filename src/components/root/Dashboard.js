import React,{useState} from 'react';
import { Row, Col } from 'reactstrap';
import CategoryList from '../categories/CategoryList.js';
import ProductList from '../products/ProductList.js';

const Dashboard = () => {
    return(
        <div>
            <Row>
                <Col xs='3'>
                    <CategoryList />
                </Col>
                <Col xs='9'>
                    <ProductList />
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;