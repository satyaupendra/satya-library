import React,{Component} from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import{BooksConsumer} from '../../context'
import CartList from './CartList'
import ExcessCart from './ExcessCart';
import ClearCart from './ClearCart';
import Checkout from '../Checkout';
class Cart extends Component{
    
render(){
    return(
        <section>
        <BooksConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0&& cart.length<4 ) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <ClearCart value={value}/>
                  <Checkout value={value}/>
                </React.Fragment>
              );
            } 
            else if(cart.length>3){
                return <ExcessCart/>
            }
            else {
              return <EmptyCart />;
            }
          }}
        </BooksConsumer>
      </section>
    )
}
}
export default Cart;