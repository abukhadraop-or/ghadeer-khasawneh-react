import React from "react";
import {
  StyledMovie,
  Information,
  UpperText,
  LowerText,
} from "../styles/Movie.Styled";
import PropTypes from "prop-types";
import { StyledImage } from "../styles/Image.Styled";

const MovieCard = (props) => {
  return (
    <StyledMovie>
      <StyledImage
        src={`https://image.tmdb.org/t/p/w500/${props.image}`}
        alt=""
      />
      <Information>
        <UpperText>
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
        </UpperText>
        <LowerText>{props.overview.substring(0, 80) + "..."}</LowerText>
      </Information>
    </StyledMovie>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  overview: PropTypes.string,
};

export default MovieCard;
