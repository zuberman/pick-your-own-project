import React from 'react';
import Pokemon from './Pokemon.js'

class SearchResults extends React.Component{
  constructor(){
    super();



  }


render(){
  return(
    <div>
      {this.props.searchListDetails.map(pokemon => {

        const onTeam = this.props.team.find( currentTeam => {
            return currentTeam.id === pokemon.id;
        });
        return(
          <Pokemon pokemon={pokemon} onTeam={onTeam} addPokemonToTeam={this.props.addPokemonToTeam} removePokemonFromTeam={this.props.removePokemonFromTeam}/>
        );
      })}
    </div>
    )
  }
}
export default SearchResults
