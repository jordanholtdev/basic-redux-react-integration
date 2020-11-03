import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Stairway to Heaven", duration: "5:03" },
    { title: "No Scrubs", duration: "3:35" },
    { title: "Corn", duration: "2:10" },
    { title: "Waterfall", duration: "4:10" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
