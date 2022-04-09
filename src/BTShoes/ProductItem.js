import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {image,name,price} = this.props.shoesObj;
        return (
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <a href="#" className="btn btn-primary">Add To Card</a>
                </div>
            </div>
        )
    }
}
