import React, { Component } from 'react'
import {BooksData,detailBook} from "./data"
const BooksContext=React.createContext();

export default class BooksProvider extends Component {
    state={
        books:[],
        detailBook:detailBook,
        cart:[],
        modalOpen:false,
        modalBook:detailBook,
    }
    componentDidMount(){
        this.setBooks();
    }
    setBooks=()=>{
        let tempBooks=[];
        BooksData.forEach(item => {
            const singleBook={...item}
            tempBooks=[...tempBooks,singleBook]
        });
      this.setState(()=>{
          return {books:tempBooks}
      })
    }
    getItem=(id)=>{
        const book=this.state.books.find(item=>item.id===id)
        return book;
    }
    handleDetail=(id)=>{
        const book=this.getItem(id);
        this.setState(()=>{
            return {detailBook:book}
        })
    }
    addToCart=(id)=>{
        let tempBooks=[...this.state.books];
        const index=tempBooks.indexOf(this.getItem(id));
        const book=tempBooks[index];
        book.inCart=true;
        book.count=1 
        this.setState(()=>{
            return{books:tempBooks,cart:[...this.state.cart,book]}
        })
    };
    openModal=id=>{
        const book=this.getItem(id);
        this.setState(()=>{
            return {modalBook:book,modalOpen:true}
        })
    }
    closeModal=()=>{
        this.setState(()=>{
           return{modalOpen:false}
        })
    }
        removeItem = id => {
            let tempBooks = [...this.state.books];
            let tempCart = [...this.state.cart];
        
            const index = tempBooks.indexOf(this.getItem(id));
            let removedBook = tempBooks[index];
            removedBook.inCart = false;
            removedBook.count = 0;
            tempCart = tempCart.filter(item => {
              return item.id !== id;
            });
            this.setState(()=>{
                return{
                    cart:[...tempCart],
                    books:[...tempBooks]
                }
            })
    }
    clearCart=()=>{
        this.setState(
            () => {
              return { cart: [] };
            },
            () => {
              this.setBooks();
            }
          );
    }
    render() {
        return (
            <BooksContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                removeItem:this.removeItem,
                clearCart:this.clearCart
                }}>
             {this.props.children}   
            </BooksContext.Provider>
        )
    }
}
const BooksConsumer=BooksContext.Consumer;
export{BooksConsumer,BooksProvider};