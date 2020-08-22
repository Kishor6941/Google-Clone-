import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../DataLayer/StateProvider";
import { actionTypes } from "../Reducer/reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [input, setInput] = useState("");
  const searchfun = (event) => {
    event.preventDefault();
    console.log("you hit search button>>>>", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" variant="outlined" onClick={searchfun}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={searchfun}
          >
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
