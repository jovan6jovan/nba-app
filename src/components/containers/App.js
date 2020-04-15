import React from "react";
import axios from "axios";
import Routes from "../routes/Routes";

import "../teams/Teams.css";
import Spinner from "../layout/Spinner";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

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
    games: [],
  };

  getTeamInfo = async (e) => {
    if (e.target.id !== "") {
      this.setState({ loading: true });

      const response = await axios.get(
        `https://www.balldontlie.io/api/v1/teams/${e.target.id}`
      );
      this.setState({ team: response.data, loading: false });
    }
  };

  searchPlayers = async (term) => {
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

  getPlayerInfo = async (e) => {
    if (e.target.id !== "") {
      this.setState({ loading: true });

      axios
        .all([
          axios.get(`https://www.balldontlie.io/api/v1/players/${e.target.id}`),
          axios.get(
            `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${e.target.id}`
          ),
          axios.get(
            `https://www.balldontlie.io/api/v1/stats?seasons[]=2019&player_ids[]=${e.target.id}`
          ),
        ])
        .then(
          axios.spread((playerBio, seasonAvgStats, statsByGame) => {
            if (
              seasonAvgStats.data.data.length === 0 ||
              statsByGame.data.data.length === 0
            ) {
              this.setAlert("This is not active NBA player", "danger");
              this.setState({
                player: playerBio.data,
                activePlayer: false,
                loading: false,
              });
            } else {
              this.setState({
                activePlayer: true,
                player: playerBio.data,
                seasonAvg: seasonAvgStats.data.data[0],
                byGameStats: statsByGame.data.data,
                loading: false,
              });
            }
          })
        );
    }
  };

  setAlert = (msg) => {
    this.setState({ alert: { msg: msg } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  onChangeHandler = (e) => this.setState({ term: e.target.value });

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.term === "") {
      this.setAlert("Please enter the player's name", "danger");
    } else {
      this.searchPlayers(this.state.term);
      this.setState({ term: "" });
    }
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
