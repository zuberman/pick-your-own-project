import React from 'react';

import '../styles/components/Cards.scss';

class Cards extends React.Component{
  constructor(){
    super();

    this.state = {
      currentCardIndex: 0
    }


  }


render(){
  return(
  <div>
    <div className="card">
      {this.props.playerCard.name}<br></br>
      <img className="sprite" src={this.props.playerCard.sprites.front_shiny} /><br></br>
      Speed: {this.props.playerCard.stats[0].base_stat}<button stat={this.props.playerCard.stats[0].base_stat} name="speed" onClick={ event =>  this.props.handleClick(this.props.playerCard.stats[0].base_stat, this.props.computerCard.stats[0].base_stat) }>Select</button><br></br>
      Special Defense: {this.props.playerCard.stats[1].base_stat}<button stat={this.props.playerCard.stats[1].base_stat} name="specialDefense"  onClick={ event =>  this.props.handleClick(this.props.playerCard.stats[1].base_stat, this.props.computerCard.stats[1].base_stat) }>Select</button><br></br>
      Special Attack: {this.props.playerCard.stats[2].base_stat}<button stat={this.props.playerCard.stats[2].base_stat} name="specialAttack"  onClick={ event =>  this.props.handleClick(this.props.playerCard.stats[2].base_stat, this.props.computerCard.stats[2].base_stat) }>Select</button><br></br>
      Defense: {this.props.playerCard.stats[3].base_stat}<button stat={this.props.playerCard.stats[3].base_stat} name="defense"  onClick={ event =>  this.props.handleClick(this.props.playerCard.stats[3].base_stat, this.props.computerCard.stats[3].base_stat) }>Select</button><br></br>
      Attack: {this.props.playerCard.stats[4].base_stat}<button stat={this.props.playerCard.stats[4].base_stat} name="attack"  onClick={ event =>  this.props.handleClick(this.props.playerCard.stats[4].base_stat, this.props.computerCard.stats[4].base_stat) }>Select</button><br></br>
      HP: {this.props.playerCard.stats[5].base_stat}<button stat={this.props.playerCard.stats[5].base_stat} name="HP"  onClick={ event =>  this.props.handleClick(this.props.playerCard.stats[5].base_stat, this.props.computerCard.stats[5].base_stat) }>Select</button><br></br>
    </div>
  </div>
)
}

}

export default Cards
