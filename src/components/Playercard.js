import React from 'react';

class Cards extends React.Component{
  constructor(){
    super();

    this.state = {
      currentCardIndex: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

handleClick(){
  console.log("the")
}


render(){
  return(
  <div>
    {this.props.team[${this.state.currentCardIndex}].name}
    {pokemon.stats[${this.state.currentCardIndex}].stat.name}{pokemon.stats[${this.state.currentCardIndex}].base_stat}<button onClick={event => this.handleClick(pokemon)}>Select</button>
  </div>
)
}

}

export default Cards
