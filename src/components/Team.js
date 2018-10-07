import React from 'react';

class Team extends React.Component{
  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this);
  }

handleClick(pokemon){
  this.props.removePokemonFromTeam(pokemon);
}


render(){
  return(
    <div>
      <h4>My PokeTeam</h4>
      {this.props.team.map(pokemon => {
      return  <div >
        <table border = "1">
          <tbody>
           <tr>
              <th>{pokemon.name}</th>
              <th>{pokemon.stats[0].stat.name}</th>
              <th>{pokemon.stats[1].stat.name}</th>
              <th>{pokemon.stats[2].stat.name}</th>
              <th>{pokemon.stats[3].stat.name}</th>
              <th>{pokemon.stats[4].stat.name}</th>
              <th>{pokemon.stats[5].stat.name}</th>
           </tr>
           <tr>
              <td><img src={pokemon.sprites.front_shiny} /></td>
              <td>{pokemon.stats[0].base_stat}</td>
              <td>{pokemon.stats[1].base_stat}</td>
              <td>{pokemon.stats[2].base_stat}</td>
              <td>{pokemon.stats[3].base_stat}</td>
              <td>{pokemon.stats[4].base_stat}</td>
              <td>{pokemon.stats[5].base_stat}</td>
           </tr>
          </tbody>
        </table>
        <h4>{pokemon.species.name}</h4>
        <button onClick={event => this.handleClick(pokemon)}>Remove from Team</button>
        </div>
      })}
    </div>
  )

}

}

export default Team
