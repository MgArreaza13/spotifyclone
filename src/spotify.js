export const authEnpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000";

const clientId = process.env.REACT_APP_clientIdSpotify;

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEnpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
