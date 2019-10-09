import React,{Component} from 'react';
import Title from './Title'
import Books from './Books'
import {BooksConsumer} from '../context';
class BooksList extends Component{

render(){
    return(
        <div className="py-5">
            <div className="container">
                <Title name="Available" title="Books"/>
                <div className="row">
                    <BooksConsumer>
                    {
                        prpy=>{
                        return prpy.books.map(book=>{
                            return <Books key={book.id} book={book}/>;
                            })
                        }
                    }
                    </BooksConsumer>
                </div>
            </div>
        </div>
        //<Books/>
    )
}
}
export default BooksList;