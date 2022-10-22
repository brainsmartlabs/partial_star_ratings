import React, { Component } from 'react';
import Rating from '../ratings/Rating.js';

class Product extends Component {
    
    render() {

        return (
            <div className="media" >
                <img className="mr-3" src={this.props.data.imageUrl} alt="Generic" />
                <div className="media-body">
                    <h5 className="mt-0">{this.props.data.productName}</h5>
                    <p> {this.props.data.description} </p>
                    <p>{this.props.data.releasedDate}</p>
                    <h6>Rating: {this.props.data.rating} Num: {this.props.data.numOfReviews}</h6>
                </div>
                <Rating ratings={this.props.data.rating} numOfReviews={this.props.data.numOfReviews} />
            </div>
        );

    }
}

export default Product;


