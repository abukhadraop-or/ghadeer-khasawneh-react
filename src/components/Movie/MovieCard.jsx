import React, { useState } from 'react';
import StyledImage from 'components/Movie/image-styles';
import PropTypes from 'prop-types';
import {
  StyledMovie,
  StyledInformation,
  StyledUpperText,
  StyledLowerText,
  StyledPageSection,
  StyledEllipseMenu,
  StyledDropDownList,
  StyledDate,
  StyledTitle,
  StyledMenuContent,
  StyledMenuTitle,
  StyledBorderedTitle,
} from 'components/Movie/movie-styles';
import ellipse from 'Assets/ellipse.png';

/**
 * Lists each movie elements.
 * * @return {JSX.element}
 */

function MovieCard({ title, date, image, overview }) {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const dropDownListHandler = () => {
    setDropDownMenu(!dropDownMenu);
  };

  return (
    <>
      <StyledMovie dropDownIsShown={dropDownMenu}>
        <StyledImage src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" />

        <StyledInformation>
          <StyledUpperText>
            <StyledTitle>{title}</StyledTitle>
            <StyledDate>{date}</StyledDate>
          </StyledUpperText>
          <StyledLowerText>{`${overview.substring(0, 80)}...`}</StyledLowerText>
        </StyledInformation>
        <StyledEllipseMenu
          src={ellipse}
          alt="ellipse"
          onClick={dropDownListHandler}
        />
        {dropDownMenu && (
          <StyledDropDownList>
            <StyledMenuTitle>
              Want to rate or add this item to a list?
            </StyledMenuTitle>
            <StyledBorderedTitle>Login</StyledBorderedTitle>
            <StyledMenuTitle>Not a member?</StyledMenuTitle>
            <StyledMenuContent>
              Sign up and join the community
            </StyledMenuContent>
          </StyledDropDownList>
        )}
      </StyledMovie>
      {dropDownMenu && (
        <StyledPageSection onClick={dropDownListHandler}>
          empty
        </StyledPageSection>
      )}
    </>
  );
}

MovieCard.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
