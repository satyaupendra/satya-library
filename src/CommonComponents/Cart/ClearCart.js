import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class ClearCart extends Component {
    render() {
            const {
              cart,
              clearCart
            } = this.props.value;
        const emptyCart = cart.length === 0 ? true : false;
        return (
            <>
            {!emptyCart && (
              <div className="container">
                <div className="row">
                  <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/cart">
                      <button
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={() => {
                          clearCart();
                        }}
                      >
                        clear cart
                      </button>
                    </Link>
                    </div>
                    </div></div>)
            }
            </>
        )
    }
}
