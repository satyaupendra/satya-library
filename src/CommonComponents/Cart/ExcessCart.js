import React, { Component } from 'react'

export default class ExcessCart extends Component {
    render() {
        return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-title text-capitalize">
                  <h1>your cart can contain only 3 books</h1>
                </div>
              </div>
            </div>
          );
    }
}
