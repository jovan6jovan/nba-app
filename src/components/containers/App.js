import React from "react";
import axios from "axios";
import MainRoutes from "../routes/MainRoutes";

import "../teams/Teams.css";
import Spinner from "../layout/Spinner";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

class App extends React.Component {
  state = {
    loading: false,
    term: "",
    alert: null,
    players: [],
    player: {},
    activePlayer: true,
    seasonAvg: {},
    byGameStats: []
  };

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

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <Navbar />
        <MainRoutes />
        <Footer />
      </div>
    );
  }
}

export default App;
