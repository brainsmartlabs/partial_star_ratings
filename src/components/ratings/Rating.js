import React, { Component } from 'react';
import './Rating.css';


class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            rating: this.props.ratings,
            numOfReviews: this.props.numOfReviews 
        };
    }

    handleClick(ratingValue) {
        this.setState({ 
            rating: ratingValue,
            numOfReviews: this.state.numOfReviews
        });
    }

    printStars(rating) {
        let starArray = [];

        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                starArray.push(<i className="fa-solid fa-star fa-2x star-color"
                    onClick={this.handleClick.bind(this, i)}></i>);
                continue;
            }
            else {
                if ((i === parseInt(rating + 1)) && ((i - rating) !== 0)) {
                    if (Number.isInteger(rating)) {
                        starArray.push(<i className="fa-regular fa-star fa-2x star-color"
                            onClick={this.handleClick.bind(this, i)}></i>);
                        continue;
                    }
                    else {
                        starArray.push(<i class="fa-solid fa-star-half-stroke fa-2x star-color"
                            onClick={this.handleClick.bind(this, i)}></i>);
                        continue;
                    }
                }
                else {
                    starArray.push(<i className="fa-regular fa-star fa-2x star-color"
                        onClick={this.handleClick.bind(this, i)}></i>);
                    continue;
                }
            }
        }
        return starArray;
    }


    render() {

        return (
            <div>
                Rating: {this.state.rating} {this.printStars(parseFloat(this.state.rating))} {this.state.numOfReviews}
            </div>
        );
    }
}

export default Rating;



/*
<Rating rating={0} />
<Rating rating={0.3} />
<Rating rating={1} />
<Rating rating={1.4} />
<Rating rating={2} />
<Rating rating="2.5" />
<Rating rating="3" />
<Rating rating="3.6" />
<Rating rating="4" />
<Rating rating="4.7" />
<Rating rating="5" />
*/