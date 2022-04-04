import React from 'react';
import StyledFooter, {
  StyledContainer,
  StyledUserSection,
  StyledImage,
  StyledTitle,
} from 'components/Footer/footer-styles';
import logo from 'Assets/Logo.svg';

/**
 * Lists footer elements.
 * * @return {JSX.element}
 */

function Footer() {
  return (
    <StyledFooter>
      <StyledContainer>
        <div>
          <StyledImage src={logo} alt="Logo" />
          <StyledUserSection>Hi Ghadeer91!</StyledUserSection>
        </div>
        <div>
          <StyledTitle>THE BASICS</StyledTitle>
          <h1>About TMDB</h1>
          <h1>Contact Us</h1>
          <h1>Support Forums</h1>
          <h1>API</h1>
          <h1>System Status</h1>
        </div>
        <div>
          <StyledTitle>Get Involved</StyledTitle>
          <h1>Contribution Bible</h1>
          <h1>Add New Movie</h1>
          <h1>Add New TV Show</h1>
        </div>
        <div>
          <StyledTitle>Community</StyledTitle>
          <h1>Guidlines</h1>
          <h1>Discussions</h1>
          <h1>Leaderboard</h1>
          <h1>Twitter</h1>
        </div>
        <div>
          <StyledTitle>LEGAL</StyledTitle>
          <h1>Terms of Use</h1>
          <h1>API Terms of Use</h1>
          <h1>Privacy Policy</h1>
        </div>
      </StyledContainer>
    </StyledFooter>
  );
}
export default Footer;
