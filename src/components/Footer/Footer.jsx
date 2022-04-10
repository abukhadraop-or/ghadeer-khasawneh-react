import React from 'react';
import PageFooter, {
  Container,
  UserSection,
  Image,
  Title,
  Element,
} from 'components/Footer/footer-styles';
import logo from 'Assets/Logo.svg';

/**
 * Lists footer elements.
 *
 * @return {JSX.Element}
 */
function Footer() {
  return (
    <PageFooter>
      <Container>
        <div>
          <Image src={logo} alt="Logo" />
          <UserSection>JOIN THE COMMUNITY</UserSection>
        </div>
        <div>
          <Title>THE BASICS</Title>
          <Element>About TMDB</Element>
          <Element>Contact Us</Element>
          <Element>Support Forums</Element>
          <Element>API</Element>
          <Element>System Status</Element>
        </div>
        <div>
          <Title>GET INVOLVED</Title>
          <Element>Contribution Bible</Element>
          <Element>Add New Movie</Element>
          <Element>Add New TV Show</Element>
        </div>
        <div>
          <Title>COMMUNITY</Title>
          <Element>Guidlines</Element>
          <Element>Discussions</Element>
          <Element>Leaderboard</Element>
          <Element>Twitter</Element>
        </div>
        <div>
          <Title>LEGAL</Title>
          <Element>Terms of Use</Element>
          <Element>API Terms of Use</Element>
          <Element>Privacy Policy</Element>
        </div>
      </Container>
    </PageFooter>
  );
}

export default Footer;
