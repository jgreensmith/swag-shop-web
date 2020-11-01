import React, { Component } from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
    render() {
        return (
             <li className="list-group-item pc-condensed">
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
                <button href="#" className="btn btn-outline-danger">Remove</button>
            </li>
        );
        
    }
}

export default ProductCondensed;   