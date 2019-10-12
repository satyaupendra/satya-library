import React,{Component} from 'react'
import { Link } from "react-router-dom";
class Checkout extends Component{
render(){
    const{
          cart,
        } = this.props.value;
        const emptyCart = cart.length === 0 ? true : false;
        return (
            <div>
            {!emptyCart && (
              <div className="container">
                <div className="row">
                  <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                      <button
                        className="btn btn-outline-primary text-uppercase mb-3 px-5"
                        type="button"
                        onClick={() => {
                            alert("Thank You..!");
                          }
                        }
                      >
                        Check Out
                      </button>
                    </Link>
            </div>
            </div>
            </div>
        
            )}
            </div>
            )
}
}


export default Checkout;