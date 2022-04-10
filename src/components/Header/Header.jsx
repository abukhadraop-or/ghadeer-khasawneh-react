import React from 'react';
import {
  PageHeader,
  List,
  Item,
  Icons,
  Image,
  LanguageSymbol,
  PlusSign,
  SerachIcon,
  LoginText,
} from 'components/Header/header-styles';
import HeaderLogo from 'Assets/HeaderLogo.svg';
import PlusIcon from 'Assets/PlusIcon.svg';
import SearchIcon from 'Assets/SearchIcon.svg';

/**
 * Lists header elements.
 *
 * @return {JSX.Element}
 */
function Header() {
  return (
    <PageHeader>
      <List>
        <Image src={HeaderLogo} alt="Logo" />
        <Item>Movies</Item>
        <Item>TV Shows</Item>
        <Item>People</Item>
        <Item>More</Item>
      </List>
      <Icons>
        <PlusSign src={PlusIcon} alt="Plus Icon" />

        <LanguageSymbol>
          <h1>EN</h1>
        </LanguageSymbol>
        <LoginText>Login</LoginText>
        <h1>Join TMDB</h1>
        <SerachIcon src={SearchIcon} alt="Search Icon" />
      </Icons>
    </PageHeader>
  );
}

export default Header;
