import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player";
import { useDataLayerValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((user) => {
          dispatch({
            type: "SET_USER",
            user: user,
          });
        })
        .catch((error) => {
          console.log(error);
        });

      spotify
        .getUserPlaylists()
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        })
        .catch((error) => {
          console.log(error);
        });

      spotify
        .getPlaylist('2MkCLEZmB7aTH7wGWgSRgH')
        .then((playlist) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: playlist,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
