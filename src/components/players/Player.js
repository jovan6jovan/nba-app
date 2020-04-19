import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../layout/Spinner";
import "../players/Player.css";
import SeasonAvgTable from "../tables/SeasonAvgTable";
import StatsByGameTable from "../tables/StatsByGameTable";

const Player = (props) => {
  const [player, setPlayer] = useState({});
  const [playerTeam, setPlayerTeam] = useState({});
  const [seasonAvg, setSeasonAvg] = useState({});
  const [statsByGame, setStatsByGame] = useState([]);
  const [loading, setLoading] = useState(false);

  const id = props.location.pathname.substring(9);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.balldontlie.io/api/v1${props.location.pathname}`).then((player) => {
      setPlayer(player.data);
      setPlayerTeam(player.data.team);
      setLoading(false);
    })
  }, [props.location.pathname]);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`).then(res => {
      setSeasonAvg(res.data.data[0]);
      setLoading(false);
    })
  }, [id]);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2019&player_ids[]=${id}`).then(res => {
      setStatsByGame(res.data.data);
      setLoading(false);
    })
  }, [id]);

  // const getSeasonAvgStats = async () => {
  //   // setLoading(true);
  //   const response = await axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`);
  //   console.log(response.data);
  //   // setLoading(false);
  // }

  // getSeasonAvgStats();

  // const getPlayerInfo = async (e) => {
  //   if (e.target.id !== "") {
  //     this.setState({ loading: true });

  //     axios
  //       .all([
  //         axios.get(`https://www.balldontlie.io/api/v1/players/${e.target.id}`),
  //         axios.get(
  //           `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${e.target.id}`
  //         ),
  //         axios.get(
  //           `https://www.balldontlie.io/api/v1/stats?seasons[]=2019&player_ids[]=${e.target.id}`
  //         ),
  //       ])
  //       .then(
  //         axios.spread((playerBio, seasonAvgStats, statsByGame) => {
  //           if (
  //             seasonAvgStats.data.data.length === 0 ||
  //             statsByGame.data.data.length === 0
  //           ) {
  //             this.setAlert("This is not active NBA player", "danger");
  //             this.setState({
  //               player: playerBio.data,
  //               activePlayer: false,
  //               loading: false,
  //             });
  //           } else {
  //             this.setState({
  //               activePlayer: true,
  //               player: playerBio.data,
  //               seasonAvg: seasonAvgStats.data.data[0],
  //               byGameStats: statsByGame.data.data,
  //               loading: false,
  //             });
  //           }
  //         })
  //       );
  //   }
  // };

  return loading ? <Spinner /> : (
    <div className="player-container">
      <div className="player-header">
        <h1 className="player-heading">
          {player.first_name} {player.last_name}
        </h1>
        {player.height_feet && (
          <p className="player-paragraph">
            Height:{" "}
            <b style={{ color: "#fff" }}>
              {player.height_feet}'{player.height_inches}
            </b>
          </p>
        )}
        {player.position && (
          <p className="player-paragraph">
            Position: <b style={{ color: "#fff" }}>{player.position}</b>
          </p>
        )}
        {player.weight_pounds && (
          <p className="player-paragraph">
            Weight:{" "}
            <b style={{ color: "#fff" }}>{player.weight_pounds} pounds</b>
          </p>
        )}
        <p className="player-paragraph">
          Team: <b style={{ color: "#fff" }}>{playerTeam.full_name}</b>
        </p>
      </div>
      { /* activePlayer && ( */
        <React.Fragment>
          <div className="table-container" id="season-table-container">
            <SeasonAvgTable seasonAvg={seasonAvg} player={player} />
          </div>
          <div className="table-container" id="game-table-container">
            <StatsByGameTable byGameStats={statsByGame} player={player} />
          </div>
        </React.Fragment>
/* ) */}
    </div>
  );
};

export default Player;
