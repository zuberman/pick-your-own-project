import React from 'react';
import Search from './Search.js';
import SearchResults from './SearchResults.js'
import Team from './Team.js'
import Game from './Game.js'

import '../styles/components/app.scss';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      pokemonList: [],
      searchQuery: "",
      searchList: [],
      searchListDetails: [],
      team: [],
      opponent: [],
      play: false
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.addPokemonToTeam = this.addPokemonToTeam.bind(this);
    this.removePokemonFromTeam = this.removePokemonFromTeam.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.generateComputerCard = this.generateComputerCard.bind(this);
  }

componentDidMount(){
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then(response => response.json())
  .then (body => {
    console.log(body.results)
    this.setState({
      pokemonList: body.results
    })
  })
}


handleSearchSubmit(){
  this.setState({
    searchList: this.state.pokemonList.filter((item) => {
      return item.name.includes(this.state.searchQuery.toLowerCase())
    })
  }, () => {

    Promise.all(this.state.searchList.map(pokemon =>
      fetch(pokemon.url).then(response => response.json())
    ))
      .then(results => {
        console.log("test", results);
        this.setState({
          searchListDetails: results
        })
      })


  })

}

handleSearchChange(searchQuery){
  this.setState({
    searchQuery: searchQuery
  }, () => {
    console.log(this.state.searchQuery)
  })
}

addPokemonToTeam(pokemon){
  if (this.state.team.length < 6){
    this.setState({
      team: this.state.team.concat(pokemon)
    })
  } else {
    alert("You can only have 6 pokemon in a team!")
  }
}


removePokemonFromTeam(pokemon){
  const filteredTeam = this.state.team.filter( currentTeam => {
    return currentTeam.id !== pokemon.id
  })

  this.setState({
    team: filteredTeam
  })
}

generateComputerCard(){
    let randomPokemonNumber = Math.floor(Math.random() * (800 - 1 + 1)) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}/`)
    .then(response => response.json())
    .then (body => {
      this.setState({
        opponent: this.state.opponent.concat(body)
      })
    })
    .catch(error => {
      console.log(error);
    })
  }


handleClick(){
  for(let i =0; i<6; i++){
    this.generateComputerCard()
    this.setState({
      play: !this.state.play
    })
  }
  console.log(this.state.opponent)
}

  render(){
    return (
      <div className="app">

        {this.state.play ? <div><Game opponent={this.state.opponent} team={this.state.team}/></div>:<div>
          <Search pokemonList={this.state.pokemonList} handleSearchSubmit={this.handleSearchSubmit} handleSearchChange={this.handleSearchChange} />
          <SearchResults searchListDetails={this.state.searchListDetails} team={this.state.team} addPokemonToTeam={this.addPokemonToTeam} removePokemonFromTeam={this.removePokemonFromTeam}/>
          <Team removePokemonFromTeam={this.removePokemonFromTeam} team={this.state.team}/>
          <button onClick={event => this.handleClick()}>Play</button>
        </div>}
      </div>
    )
  }
}

export default App;
