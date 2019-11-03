import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../teams/Teams.css";
import Spinner from "../layout/Spinner";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Teams from "../teams/Teams";
import Team from "../teams/Team";
import Players from "../players/Players";
import Player from "../players/Player";
import Games from "../games/Games";

class App extends React.Component {
  state = {
    loading: false,
    teams: [],
    team: {},
    term: "",
    players: [],
    player: {},
    seasonAvg: {}
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await axios.get("https://www.balldontlie.io/api/v1/teams");

    this.setState({ teams: response.data.data, loading: false });
  }

  getTeamInfo = async e => {
    if (e.target.id !== "") {
      this.setState({ loading: true });

      const response = await axios.get(
        `https://www.balldontlie.io/api/v1/teams/${e.target.id}`
      );
      this.setState({ team: response.data, loading: false });
    }
  };

  searchPlayers = async term => {
    this.setState({ loading: true });

    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/players?search=${term}`
    );

    this.setState({ players: response.data.data, loading: false });
  };

  clearResults = () => this.setState({ players: [], loading: false });

  getPlayerInfo = async e => {
    if (e.target.id !== "") {
      this.setState({ loading: true });

      const response = await axios.get(
        `https://www.balldontlie.io/api/v1/players/${e.target.id}`
      );

      this.setState({ player: response.data, loading: false });
      console.log(this.state.player);
    }
  };

  onChangeHandler = e => this.setState({ term: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    this.searchPlayers(this.state.term);
    this.setState({ term: "" });
  };

  getSeasonAvg = async () => {
    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${this.state.player.id}`
    );

    this.setState({ seasonAvg: response.data.data[0]});
    console.log(this.state.seasonAvg)
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Teams
                  teams={this.state.teams}
                  getTeamInfo={this.getTeamInfo}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              exact
              path="/team/:id"
              render={props => (
                <Team team={this.state.team} loading={this.state.loading} />
              )}
            />
            <Route
              path="/players"
              render={props => (
                <Players
                  term={this.state.term}
                  players={this.state.players}
                  getPlayerInfo={this.getPlayerInfo}
                  onChangeHandler={this.onChangeHandler}
                  onSubmitHandler={this.onSubmitHandler}
                  clearResults={this.clearResults}
                  showClearBtn={this.state.players.length > 0 ? true : false}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              exact
              path="/player/:id"
              render={props => (
                <Player
                  player={this.state.player}
                  loading={this.state.loading}
                  getSeasonAvg={this.getSeasonAvg}
                  seasonAvg={this.state.seasonAvg}
                />
              )}
            />
            <Route
              path="/games"
              render={props => <Games loading={this.state.loading} />}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
