import React, { Component } from 'react'

export default class Modal extends Component {
    render() {

        console.log(this.props.proObj);
        let { name, alias, description,shortDescription, quantity, price, image } = this.props.proObj;
        return (
            <div className="row">
                <div className="col-4">
                    <h3>{name}</h3>
                    <img className='img-fluid' src={image} alt="..." />
                </div>
                <div className="col-8">
                    <h2>Chi tiết sản phẩm</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Thành Phần</th>
                                <th scope="col">Thông tin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alias </td>
                                <td>{alias}</td>
                            </tr>
                            <tr>
                                <td>Description </td>
                                <td>{description}</td>
                            </tr>
                            <tr>
                                <td>ShortDescription</td>
                                <td>{shortDescription}</td>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <td>{quantity}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
