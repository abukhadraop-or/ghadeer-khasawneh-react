import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'components/MovieCard/image-styles';
import {
  Movie,
  CardContent,
  CardText,
  OverviewText,
  OverlaySection,
  EllipsImage,
  DropDownList,
  Date,
  Title,
  MenuContent,
  MenuTitle,
  BorderedTitle,
  BlurryCard,
  OuterCircle,
  MiddleCircle,
  InnerCircle,
  PercentageText,
} from 'components/MovieCard/movie-styles';
import EllipseImage from 'Assets/EllipseImage.svg';

/**
 * Shows information about movies.
 *
 *  @param {Object} props Props object.
 *  @param {String} props.title Movie title.
 *  @param {String} props.date Movie release date.
 *  @param {String} props.image Movie image.
 *  @param {String} props.overview Overview about the movie.
 *  @param {String} props.average Voting average of the movie.
 *
 *  @return {JSX.Element}
 */
function MovieCard({ title, date, image, overview, average }) {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const voteInDegrees = Math.trunc((average / 10) * 360);
  const votePercentage = Math.ceil(average * 10);

  /**
   * Handles showing and hiding the Hamburger menu.
   */
  const dropDownListHandler = () => setDropDownMenu(!dropDownMenu);

  return (
    <>
      <Movie dropDownIsShown={dropDownMenu}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt="Movie Image"
        />
        <CardContent>
          <CardText>
            <Title>{title}</Title>
            <Date>{date}</Date>
          </CardText>
          <OverviewText>{`${overview.substring(0, 80)}...`}</OverviewText>
        </CardContent>
        <EllipsImage
          src={EllipseImage}
          alt="ellipse"
          onClick={dropDownListHandler}
        />
        {dropDownMenu && (
          <>
            <DropDownList>
              <MenuTitle>Want to rate or add this item to a list?</MenuTitle>
              <BorderedTitle>
                Login
              </BorderedTitle>
              <MenuTitle>Not a member?</MenuTitle>
              <MenuContent>Sign up and join the community</MenuContent>
            </DropDownList>
            <BlurryCard />
          </>
        )}
        <OuterCircle>
          <MiddleCircle degrees={voteInDegrees} percentage={votePercentage}>
            <InnerCircle>
              <PercentageText>{votePercentage}</PercentageText>
            </InnerCircle>
          </MiddleCircle>
        </OuterCircle>
      </Movie>
      {dropDownMenu && <OverlaySection onClick={dropDownListHandler} />}
    </>
  );
}

MovieCard.propTypes = {
  average: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
