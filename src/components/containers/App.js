import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../teams/Teams.css";
import Spinner from "../layout/Spinner";
import Navbar from "../layout/Navbar";
import LandingPage from "../layout/LandingPage";
import Footer from "../layout/Footer";
import Teams from "../teams/Teams";
import Team from "../teams/Team";
import Players from "../players/Players";
import Alert from "../layout/Alert";
import Player from "../players/Player";
import Games from "../games/Games";

class App extends React.Component {
  state = {
    loading: false,
    teams: [],
    team: {},
    term: "",
    alert: null,
    players: [],
    player: {},
    activePlayer: true,
    seasonAvg: {},
    byGameStats: [],
    games: []
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

    if (response.data.data.length === 0) {
      this.setAlert("There is no NBA player with that name", "danger");
      this.setState({ loading: false });
    } else {
      this.setState({ players: response.data.data, loading: false });
    }
  };

  clearPlayersResults = () => this.setState({ players: [], loading: false });
  clearGamesResults = () => this.setState({ games: [], loading: false });

  getPlayerInfo = async e => {
    if (e.target.id !== "") {
      this.setState({ loading: true });

      axios
        .all([
          axios.get(`https://www.balldontlie.io/api/v1/players/${e.target.id}`),
          axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${e.target.id}`),
          axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2019&player_ids[]=${e.target.id}`)
        ])
        .then(
          axios.spread((playerBio, seasonAvgStats, statsByGame) => {
            if (seasonAvgStats.data.data.length === 0 || statsByGame.data.data.length === 0) {
              this.setAlert("This is not active NBA player", "danger");
              this.setState({ player: playerBio.data, activePlayer: false, loading: false });
            } else {
              this.setState({
                activePlayer: true,
                player: playerBio.data,
                seasonAvg: seasonAvgStats.data.data[0],
                byGameStats: statsByGame.data.data,
                loading: false
              });
            }
          })
        );
    }
  };

  setAlert = msg => {
    this.setState({ alert: { msg: msg } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  onChangeHandler = e => this.setState({ term: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    if (this.state.term === "") {
      this.setAlert("Please enter the player's name", "danger");
    } else {
      this.searchPlayers(this.state.term);
      this.setState({ term: "" });
    }
  };

  getTodaysGames = async () => {
    const today = new Date().toISOString().slice(0, 10);

    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${today}`
    );

    this.setState({ games: response.data.data });
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path="/" render={props => <LandingPage />} />
            <Route
              exact
              path="/teams"
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
                  clearPlayersResults={this.clearPlayersResults}
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
                  activePlayer={this.state.activePlayer}
                  loading={this.state.loading}
                  getSeasonAvg={this.getSeasonAvg}
                  seasonAvg={this.state.seasonAvg}
                  byGameStats={this.state.byGameStats}
                  statsByGame={this.statsByGame}
                  clearAvgStats={this.clearAvgStats}
                />
              )}
            />
            <Route
              path="/games"
              render={props => (
                <Games
                  loading={this.state.loading}
                  games={this.state.games}
                  getTodaysGames={this.getTodaysGames}
                  clearGamesResults={this.clearGamesResults}
                  showClearBtn={this.state.games.length > 0 ? true : false}
                />
              )}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
