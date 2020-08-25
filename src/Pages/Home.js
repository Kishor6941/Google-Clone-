import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import "./Home.css";
import Search from "./Search";
const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          {/*Link About */}
          <Link to="about">About</Link>
          <Link to="store">Store</Link>

          {/*Link Store */}
        </div>
        <div className="home_headerRight">
          {/*Link Gmail */}
          <Link to="gmail">Gmail</Link>
          {/*Link Image */}
          <Link to="images">Images</Link>
          {/*Icon */}
          <AppsIcon />
          {/*Avatar*/}
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home_inputContainer ">
          {/* <Search /> */}
          <Search />
        </div>
      </div>
      <footer className="footer_google">
        <p>Copyright &copy; 2020 Kishor Technical</p>
      </footer>
    </div>
  );
};

export default Home;
