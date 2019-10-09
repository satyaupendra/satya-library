import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Books</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">name of Book</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">remove</p>
          </div>
        </div>
      </div>
    );
  }
}
