export const initialState = {
  user: null,
  // token: null,
  token: "BQAQrTxyF1zE4NfOqSKDbgDvwCGvr_dFtfmROAeCyApwqd_fOyqFQWvJcct1tt1r08ubQJqQjoZ7Fy7wKmysJ5Rtxg3LeYuWOPoZANy-YcCVMqUH_g7mYTOn3pOHgJtfuy84dXCUQ5kYaPM",
  paylists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
