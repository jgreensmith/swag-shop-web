import React, {Component} from 'react';
import './product.css';
import DataService from '../services/data-service';

let ds = new DataService();

class Product extends Component {
    
    constructor(props) {
        super(props);
        
        //bind
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }
    onButtonClicked = () => {
        ds.addWishListItem(this.props.product);
    }
    render() {
        return (
             <div className="card product">
                <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.title}</h5>
                    <p className="card-text">Price: ${this.props.product.price}</p>
                    <button href="#" onClick={() => this.onButtonClicked()} className="btn btn-primary">Add to Wishlist</button>
                </div>
        </div> 
        );
        
    }
}

export default Product;   