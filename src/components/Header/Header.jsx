import React from 'react';
import {
  StyledHeader,
  Styledlist,
  StyledItem,
  StyledIcons,
  StyledImage,
  StyledLanguageSymbol,
  StyledPlusSign,
  StyledSerachIcon,
} from 'components/Header/header-styles';
import HeaderLogo from 'Assets/HeaderLogo.svg';
import PlusIcon from 'Assets/PlusIcon.svg';
import SearchIcon from 'Assets/SearchIcon.svg';

/**
 * Lists header elements.
 * * @return {JSX.element}
 */


function Header() {
  return (
    <StyledHeader>
      <Styledlist>
        <StyledImage src={HeaderLogo} alt="Logo" />

        <StyledItem>Movies</StyledItem>
        <StyledItem>TV Shows</StyledItem>
        <StyledItem>People</StyledItem>
        <StyledItem>More</StyledItem>
      </Styledlist>
      <StyledIcons>
        <StyledPlusSign src={PlusIcon} alt="Plus Icon" />

        <StyledLanguageSymbol>EN</StyledLanguageSymbol>
        <h1>Login</h1>
        <h1>Join TMDB</h1>
        <StyledSerachIcon src={SearchIcon} alt="Search Icon" />
      </StyledIcons>
    </StyledHeader>
  );
}

export default Header;
