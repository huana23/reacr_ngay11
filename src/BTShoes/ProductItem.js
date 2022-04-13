import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {image,name,price} = this.props.shoes;
        return (
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <a href="#" className="btn btn-primary" onClick={() => {
                        // lấy dữ liệu của sản phẩm đang được kích
                        console.log(this.props.shoes);
                        let shoesData = this.props.shoes;
                        this.props.xemChiTiet(shoesData);
                      }}>Xem chi tiết
                      </a>
                </div>
            </div>
        )
    }
}
