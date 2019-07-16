import React, { Component } from "react";
import Player from "./Player";
import "./Scoreboard.css";
import AddPlayer from "./AddPlayer"

export default class Scoreboard extends Component {
    state = {
        players: [{id: 1, name: "Arien", score: 2},
        {id:2, name: "David", score: 5},
        {id:3, name: "Mimi", score: 4}]
    }

    render () {

        const players_copy = [ ...this.state.players ];

        players_copy.sort((a, b) => b.score - a.score);
    
        return (
          <div className="scoreboard">
            <h1>Scoreboard</h1>
            <ul>
              {players_copy.map(player => {
                 return (
                    <Player
                      key={player.id}
                      id={player.id}
                      name={player.name}
                      score={player.score}
                      incrementScore={this.incrementScoreOfPlayer}                      
                    />
                  )}
              
              )}
            </ul>
            <AddPlayer addPlayer ={this.addPlayer}></AddPlayer>
          </div>
          
        )
      }
      incrementScoreOfPlayer = id => {
        const updatedPlayers = this.state.players.map(player => {
          if (player.id === id) {
            return {...player, score: player.score + 1 };
          } else {
            return player;
          }
        });
        this.setState({ players: updatedPlayers });
      }
      addPlayer = (name) => {
        const player = {
          id: Math.round(Math.random()*100000),
          name,
          score: 0
        }
        this.setState({
          players: this.state.players.concat(player)
        })
      }
      
      }

