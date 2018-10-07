import React from 'react'
import Cards from './Cards.js'

import '../styles/components/Game.scss';

class Game extends React.Component{
  constructor(){
    super()

    this.state = {
      playerScore: 0,
      computerScore: 0,
      playerTurn: true,
      playerCard: {},
      computerCard: {},
      cardIndex: 0
    }

      this.handleClick = this.handleClick.bind(this);

  }


handleClick(playerStat, computerStat){
const playerCard = this.props.team[this.state.cardIndex];
const computerCard = this.props.opponent[this.state.cardIndex];
 if (playerStat > computerStat){
   this.setState({
     playerScore: this.state.playerScore + 1,
     cardIndex: this.state.cardIndex + 1
   })
   alert(`${playerCard.name} beat ${computerCard.name}`)

 } else if (playerStat < computerStat){
   this.setState({
     computerScore: this.state.computerScore + 1,
     cardIndex: this.state.cardIndex + 1
   })
   alert(`${computerCard.name} beat ${playerCard.name}`)
 }

  if (this.state.playerScore === 3){
    alert("Player Wins")
    let win = new Audio('win.mp3');
    win.play();
  }

}

render(){
  const playerCard = this.props.team[this.state.cardIndex];
  const computerCard = this.props.opponent[this.state.cardIndex];
  return(
  <div className="game">
    <div className="scores"><h6>Player Score: {this.state.playerScore} --- Computer Score: {this.state.computerScore} </h6></div>
    <div className="gameCard"><Cards handleClick={this.handleClick} team={this.props.team} playerCard={playerCard} computerCard={computerCard}/></div>
  </div>
  )
}


}
export default Game
