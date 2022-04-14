import React from 'react';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import PagePhoneHeader, {
  LeftSection,
  RightSection,
  AvatarImage,
  HeaderSearchIcon,
  HeaderLogo,
} from 'components/PhoneHeader/phone-header-styles';
import Logo from 'Assets/Logo.svg';
import Avatar from 'Assets/Avatar.svg';
import SearchIcon from 'Assets/SearchIcon.svg';

/**
 * Lists phone header elements.
 *
 *  @param {Object} props Props object.
 *  @param {function} props.onToggleHandler Handles opening and closing the hamburger menu.
 *
 *  @return {JSX.Element}
 */
function PhoneHeader({ onToggleHandler }) {
  return (
    <PagePhoneHeader>
      <LeftSection>
        <div>
          <GiHamburgerMenu onClick={onToggleHandler} />
        </div>
        <div>
          <HeaderLogo src={Logo} alt="Logo" />
        </div>
      </LeftSection>
      <RightSection>
        <AvatarImage src={Avatar} alt="Avatar" />
        <HeaderSearchIcon src={SearchIcon} alt="Search Icon" />
      </RightSection>
    </PagePhoneHeader>
  );
}

PhoneHeader.propTypes = {
  onToggleHandler: PropTypes.func.isRequired,
};

export default PhoneHeader;
