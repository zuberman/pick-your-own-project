import React from 'react';

class Pokemon extends React.Component {
  constructor(){
    super();

    this.state= {

    }

    this.handleClick = this.handleClick.bind(this);
  }

handleClick(){
  if(this.props.onTeam){
    this.props.removePokemonFromTeam(this.props.pokemon);
  } else {
    this.props.addPokemonToTeam(this.props.pokemon);
  }
}

  render(){
    return(
    <div>
      <table border = "1">
        <tbody>
         <tr>
            <th>{this.props.pokemon.name}</th>
            <th>{this.props.pokemon.stats[0].stat.name}</th>
            <th>{this.props.pokemon.stats[1].stat.name}</th>
            <th>{this.props.pokemon.stats[2].stat.name}</th>
            <th>{this.props.pokemon.stats[3].stat.name}</th>
            <th>{this.props.pokemon.stats[4].stat.name}</th>
            <th>{this.props.pokemon.stats[5].stat.name}</th>
         </tr>
         <tr>
            <td><img src={this.props.pokemon.sprites.front_shiny} /></td>
            <td>{this.props.pokemon.stats[0].base_stat}</td>
            <td>{this.props.pokemon.stats[1].base_stat}</td>
            <td>{this.props.pokemon.stats[2].base_stat}</td>
            <td>{this.props.pokemon.stats[3].base_stat}</td>
            <td>{this.props.pokemon.stats[4].base_stat}</td>
            <td>{this.props.pokemon.stats[5].base_stat}</td>
         </tr>
        </tbody>
      </table>
      <h4>{this.props.pokemon.species.name}</h4>
      <button onClick={this.handleClick}>{ this.props.onTeam ? 'Remove from team' : 'Add to team'}</button>
    </div>
    )
  }

}

export default Pokemon
