import React from "react";
import { StyledPhoneHeader } from "../styles/PhoneHeader.Styled";
import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";

const PhoneHeader = (props) => {
  return (
    <>
      <StyledPhoneHeader>
        <article>
          <div>
            <GiHamburgerMenu onClick={props.onToggleHandler} />
          </div>
          <div>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt=""
              width="57px"
            />
          </div>
        </article>
        <section>
          <img
            className="searchImage"
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-7de7dfcae838579a18f4eebc5b8847230d154718e481c5cd01c477cfcbc85993.svg"
            alt="Ava"
            width="25px;"
          />
          <img
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
            alt="Search Icon"
            width="25px"
          />
        </section>
      </StyledPhoneHeader>
    </>
  );
};
PhoneHeader.propTypes = {
  onToggleHandler: PropTypes.func,
};
export default PhoneHeader;
