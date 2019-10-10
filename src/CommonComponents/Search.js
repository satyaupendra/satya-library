import React,{Component} from 'react';
import Title from './Title'
import Books from './Books'
import {BooksData} from '../data';
class Search extends Component{

    constructor(){
        super();
        this.state={
          search:''
        }
      }
      updateSearch(e){
        this.setState({search:e.target.value.substr(0,20)});
      }
    render(){
           let d=BooksData.filter((book)=>{
          return (book.title.indexOf(this.state.search)!==-1,
          book.genre.toLowerCase().indexOf(this.state.search)!==-1)
      })
      return(
          <div>
              <h1></h1>
        <form class="form-inline active-purple-4">
        <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search By Name of Book or Genre"
            aria-label="Search"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
          <font color="black"><i class="fas fa-search" aria-hidden="true"></i></font>
        </form>
          <ul>
            {d.map((book)=>{
              return <span><Books book={book} key={book.id}/></span>
            })}
          </ul>   
          </div>
        )
    }}
    
export default Search;