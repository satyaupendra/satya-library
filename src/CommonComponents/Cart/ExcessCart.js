import React, { Component } from 'react'
import Cart from './Cart';
export default class ExcessCart extends Component {
    render() {
      const { value } = this.props;
      const { cart } = this.props.value;
        return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-title text-capitalize">
                  <h1>your cart can contain only 3 books
                    Please remove
                  </h1>
                  <h2>{(cart.length-3)}->BOOK</h2>
                </div>
              </div>
            </div>
          );
    }
}
