import React from 'react';
import StyledFooter, {
  StyledContainer,
  StyledUserSection,
  StyledImage,
  StyledTitle,
  StyledElement,
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
          <StyledUserSection>JOIN THE COMMUNITY</StyledUserSection>
        </div>
        <div>
          <StyledTitle>THE BASICS</StyledTitle>
          <StyledElement>About TMDB</StyledElement>
          <StyledElement>Contact Us</StyledElement>
          <StyledElement>Support Forums</StyledElement>
          <StyledElement>API</StyledElement>
          <StyledElement>System Status</StyledElement>
        </div>
        <div>
          <StyledTitle>Get Involved</StyledTitle>
          <StyledElement>Contribution Bible</StyledElement>
          <StyledElement>Add New Movie</StyledElement>
          <StyledElement>Add New TV Show</StyledElement>
        </div>
        <div>
          <StyledTitle>Community</StyledTitle>
          <StyledElement>Guidlines</StyledElement>
          <StyledElement>Discussions</StyledElement>
          <StyledElement>Leaderboard</StyledElement>
          <StyledElement>Twitter</StyledElement>
        </div>
        <div>
          <StyledTitle>LEGAL</StyledTitle>
          <StyledElement>Terms of Use</StyledElement>
          <StyledElement>API Terms of Use</StyledElement>
          <StyledElement>Privacy Policy</StyledElement>
        </div>
      </StyledContainer>
    </StyledFooter>
  );
}
export default Footer;
