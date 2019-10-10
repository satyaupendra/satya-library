import React,{Component} from 'react';
import {BooksConsumer} from '../context';
import {Link} from 'react-router-dom';
import{ButtonContainer} from './Button';
class Details extends Component{
render(){
    return(
        <BooksConsumer>
            {(value)=>{
                const{id,title,auhtor,imgs,info,genre,inCart,yof,available}=
                value.detailBook;
          return(
              <div className="container py-5">
                  <div className="row">
                     <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                         <h1>{title}</h1>
                     </div>
                  </div>
                  <div className="row">
                      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={imgs} className="img-fluid" alt="book"/>
                      </div>
                      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>Author : {auhtor}</h2>
                        <h4>Year of Publication : {yof}</h4>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">genre : 
                        <span className="text-uppercase">{genre}</span></h4>
                        <p>
                        {available?(
                        <h4 className="text-capitalize mb-0" disabled>
                        <font color="green">Available</font></h4>
                        ):(<h4><font color="red">Not Available</font></h4>)}
                        </p>
                        
                        <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                            Description:
                        </p>
                        <p className=" text-muted lead">{info}</p>
                        <div>
                            <Link to="/">
                                <ButtonContainer>back to Books</ButtonContainer>
                            </Link>
                            <ButtonContainer
                            cart
                            disabled={inCart?true:false}
                            onClick={()=>{value.addToCart(id)
                                            value.openModal(id)}}>
                                {inCart ?'inCart':"add to cart"}
                            </ButtonContainer>
                        </div>
                    </div>
                  </div>
              </div>
          )
            }}
        </BooksConsumer>
    )
}
}
export default Details;