import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../DataLayer/StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Response from "../response";
import Search from "./Search";
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  /*
Live API Call 
  const { data } = useGoogleSearch(term);
 */
  const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage_results"></div>
    </div>
  );
};
export default SearchPage;
//AIzaSyARi-CR95EuqtFqL0nhqkSAzXhOKr-NYC4
//https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key

//https://cse.google.com/cse/setup/basic?cx=7a1502f71f8ed5c60
//Search engine Id 7a1502f71f8ed5c60
