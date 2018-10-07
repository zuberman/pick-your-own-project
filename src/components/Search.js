import React from 'react';

class Search extends React.Component{
  constructor(){
    super();

    this.state = {

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event){
  this.props.handleSearchChange(event.target.value)
}

handleSubmit(event){
  event.preventDefault();
  this.props.handleSearchSubmit();
  }



render(){
  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} />
      <button type="submit">PokeSearch</button>
    </form>
  )
}

}
export default Search;
