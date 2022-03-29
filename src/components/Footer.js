import React from "react";
import { StyledFooter } from "../styles/Footer.Styled";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt=""
          width="57px"
        />
        <div className="basics">
          <div>THE BASICS</div>
          <div>About TMDB</div>
          <div>Contact Us</div>
          <div>Support Forums</div>
          <div>API</div>
          <div>System Status</div>
        </div>
        <div className="getInvolved">
          <div>Get Involved</div>
          <div>Contribution Bible</div>
          <div>Add New Movie</div>
          <div>Add New TV Show</div>
        </div>
        <div className="community">
          <div>Community</div>
          <div>Guidlines</div>
          <div>Discussions</div>
          <div>Leaderboard</div>
          <div>Twitter</div>
        </div>
        <div className="legal">
          <div>LEGAL</div>
          <div>Terms of Use</div>
          <div>API Terms of Use</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </StyledFooter>
  );
};
export default Footer;
